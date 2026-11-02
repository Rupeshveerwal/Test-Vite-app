import { useEffect, useState } from 'react'
import axios from 'axios'
import './Form.css'

function Predict() {
  const [experience, setExperience] = useState('')
  const [trainingData, setTrainingData] = useState(null)
  const [salary, setSalary] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    axios.get('/api/training-data', { signal: controller.signal })
      .then(({ data }) => setTrainingData(data))
      .catch((requestError) => {
        if (!controller.signal.aborted) {
          setError(requestError.response?.data?.detail || 'Could not connect to the prediction API.')
        }
      })

    return () => controller.abort()
  }, [])

  async function handlePredict(event) {
    event.preventDefault()
    setError('')
    setSalary(null)
    setIsLoading(true)

    try {
      const { data } = await axios.post('/api/predict', {
        experience_years: Number(experience),
      })
      setSalary(data.predicted_salary)
    } catch (requestError) {
      setError(requestError.response?.data?.detail || 'Could not get a prediction from the API.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="form-body">
      <header className="form-header">
        <h1>Salary Prediction</h1>
      </header>

      <form className="form-container" onSubmit={handlePredict}>
        <label htmlFor="experience">Experience in years</label>
        <input
          id="experience"
          type="number"
          min="0"
          step="any"
          required
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          placeholder="e.g. 3.5"
        />
        <button type="submit" disabled={!trainingData || isLoading}>
          {isLoading ? 'Predicting...' : 'Predict salary'}
        </button>
      </form>

      {trainingData && (
        <section aria-live="polite">
          <p>
            API connected. Using {trainingData.records.length} {trainingData.source} training
            records (salary values are in the dataset&apos;s units).
          </p>
        </section>
      )}

      {salary !== null && (
        <section aria-live="polite">
          <h2>Predicted salary</h2>
          <p>{salary.toLocaleString()}</p>
        </section>
      )}

      {error && <p role="alert">{error}</p>}
    </main>
  )
}

export default Predict
