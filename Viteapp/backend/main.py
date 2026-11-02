from fastapi import FastAPI
from pydantic import BaseModel, Field
from sklearn.linear_model import LinearRegression

app = FastAPI(title="Salary Prediction API")

# Replace these demo records with real, representative salary data before relying
# on the predictions.
TRAINING_RECORDS = [
    {"experience_years": 0.5, "salary": 15000},
    {"experience_years": 1, "salary": 20000},
    {"experience_years": 2, "salary": 30000},
    {"experience_years": 3, "salary": 40000},
    {"experience_years": 5, "salary": 60000},
    {"experience_years": 8, "salary": 90000},
    {"experience_years": 10, "salary": 110000},
]

model = LinearRegression()
model.fit(
    [[record["experience_years"]] for record in TRAINING_RECORDS],
    [record["salary"] for record in TRAINING_RECORDS],
)


class PredictionRequest(BaseModel):
    experience_years: float = Field(ge=0, le=50)


@app.get("/api/training-data")
def get_training_data():
    return {
        "source": "demo",
        "records": TRAINING_RECORDS,
    }


@app.post("/api/predict")
def predict_salary(request: PredictionRequest):
    prediction = model.predict([[request.experience_years]])[0]
    return {
        "experience_years": request.experience_years,
        "predicted_salary": round(float(prediction), 2),
    }
