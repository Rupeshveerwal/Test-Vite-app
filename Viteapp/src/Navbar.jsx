import { useState } from "react";

// function Navbar({title,link,number}) {
//     // let count = 0 ;
//     const [count,func] = useState(0)

//     function Increment() {
//         func(count + 1);
//     }
//     return(
//         <div>
//             {/* <h1>{title}</h1>
//             <h1>{link}</h1>
//             <h1>{number}</h1> */}
//             <h1>{count}</h1>
//             <button onClick={Increment}>Increment</button>
//         </div>
//     )
// }
// export default Navbar



export default function Navbar()
    {
        const [count,setCount] = useState(0);
        function Inc() {
            setCount(count + 1)
        }
        function Dec() {
            setCount(count - 1)
        }
        return(
            <>
                <h1>{count}</h1>
                <button onClick={Inc}>Increment</button>
                <br></br>
                <button onClick={Dec}>Decrement</button>
            </>              
        )
    }



// export default function hoverEffect()
//     {
//         // const [count,setCount] = useState(0);
//         function Red() {
            
//         }
//         function Dec() {
//             setCount(count - 1)
//         }
//         return(
//             <>
//                 <h1>{count}</h1>
//                 <button onClick={} >Increment</button>
//                 <button onClick={}>Decrement</button>
//                 <button hoverEffect={Green} width='50px' >Green</button>
//                 <br></br>
//             </>              
//         )
//     }


