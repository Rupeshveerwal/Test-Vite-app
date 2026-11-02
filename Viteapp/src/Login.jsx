import { useState } from "react";

export default function Login()
{
    const [name, setName] = useState("")
    const [age, ageChange] = useState(0)

    function Change1(e){
        setName(e.target.value);
    }
    function Change2(k){
        ageChange(k.target.value);
    }

    return(
        <>
            <div>
            {/* <label>Enter your Name</label> */}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br></br>
            {/* <label>Enter your Name</label> */}
            <input type="text" value={age} onChange={(e)=> ageChange(e.target.value)} />
            <br></br>
            <h1>{name}'s age is  {age}</h1>
            </div>
        </>
    )
}
