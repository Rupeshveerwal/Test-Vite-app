import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Login from './Login.jsx'
// import Form1 from './Form1.jsx'
import Header from './Header.jsx'
import Test from './Test.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ExampleComponent />
      <Image1/>
      <Navbar title = "Title-of-navbar" number = {3} link = "google.com"/>
      <Login/>
      <Form1/> */}
      <Header/>  
      <Test/>
      <Test/>
      <Test/>
    </>
  )
}

export default App;
