import { useState } from "react";
import './Form.css'
export default function Form1()
 {
    const [Name,setName] = useState("")
    const [Num,setNum] = useState(0)
    const [Email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    // States for submitted preview data
  const [submittedData, setSubmittedData] = useState({
    Name: "",
    Num: "",
    Email: "",
    pass: ""
  });


    return(
        <>
        <div className="form-body">
        <div className="form-header">
            <h1>Form Submission</h1>
        </div>
            <div className="form-container">
                <form  onSubmit={(e) => {
                    e.preventDefault({});
                    setSubmittedData({
                    Name,
                    Num,
                    Email,
                    pass});
                    console.log({ Name, Num, Email, pass });
                    // Handle form submission
                }}>
                    <label>Enter your Name</label><br></br>
                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} /><br></br>
                    <label>Enter your Number</label><br></br>
                    <input type="text" value={Num} onChange={(e) => setNum(e.target.value)} /><br></br>
                    <label>Enter your Email</label><br></br>
                    <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <label>Enter your Password</label><br></br>
                    <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} /><br></br>
                    <button type="submit">Submit</button><br></br>
                </form>
            </div>
            <div>
        <h2>Submitted Preview:</h2>
        <p>Name: {submittedData.Name}</p>
        <p>Number: {submittedData.Num}</p>
        <p>Email: {submittedData.Email}</p>
        <p>Password: {submittedData.pass}</p>
      </div>
      </div>
        </>

    )
}