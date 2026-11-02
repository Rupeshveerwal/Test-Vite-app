import  { useState} from 'react'

export default function Test() {
    const [count, setCount] = useState(0);
    


  return (
        <>
            <h1>Test</h1>
            <button onClick = {() => setCount(count + 1)}> Click here</button>
        <p>You clicked {count} , {setCount} times</p>
        </>
    )
}