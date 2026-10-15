import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <body>
    <div>
        <img id="logo" src="https://static.vecteezy.com/system/resources/previews/047/530/617/non_2x/coffee-logo-in-flat-design-style-art-free-png.png"/>
</div>
    <h1>Coffee with Rupesh</h1>
    <div>
      <a href='#Home'>Home</a>
      <a href='#Menu'>Menu</a>
      <a href='#Gallery'>Gallery</a>
      <a href='#About'>About</a>
      <a href='#Contact'>Contact us</a>
    </div>
    <section id='Home'>
      <h2>Home</h2>
      <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi adipisci doloribus necessitatibus rerum ratione sunt quidem, quos iure pariatur laborum aperiam illum laboriosam dolorem dolorum, nemo doloremque, ipsam similique. Qui.</h3>

      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, dolor illum impedit laborum vitae eum repellendus nulla quidem tempore suscipit accusamus? Iure illum tempore a maxime autem hic? Est, dicta.</h4>

    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet vel veritatis minima recusandae impedit maiores at quibusdam! Culpa corporis nemo quaerat perspiciatis repellendus eos libero, nihil veniam ab optio!</h5>

    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad distinctio hic officia corrupti nisi repudiandae! Non, provident quam nesciunt libero soluta officia dignissimos cumque odit reprehenderit iusto architecto velit.</h6>

      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, dolor illum impedit laborum vitae eum repellendus nulla quidem tempore suscipit accusamus? Iure illum tempore a maxime autem hic? Est, dicta.</h4>

    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet vel veritatis minima recusandae impedit maiores at quibusdam! Culpa corporis nemo quaerat perspiciatis repellendus eos libero, nihil veniam ab optio!</h5>

    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad distinctio hic officia corrupti nisi repudiandae! Non, provident quam nesciunt libero soluta officia dignissimos cumque odit reprehenderit iusto architecto velit.</h6>
    </section>
    <section id='Menu'>
      <h2>Our Menu</h2>
      
    </section>
    <section id='about'>
      
    </section>
    <section id='Contact'>
      
    </section>
    <section id='Gallary'>
        {/* <!-- gallery section --> */}
        <h2>Gallery</h2>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlOUp_ZPDp7WKVj9xsOpYJSaXHJq3LoPieIOM_D5Ijw&s=10"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKjL7Vnuk_ZC4Gjg2sxApLyFxrf4IzZe-7MIfH86NzQ&s"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOroS-PCPS-0RuA8Xw1cAj_aHqxgRj9oWU0Rr3MXVRgQ&s=10"/> 
        </div>
         <div>
          
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNZkpsOjezsZbG0qxnNeC-FXtSjuVqSSmZAvOeFABpQ&s=10" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktKBPSlUUGBFGR0OC1J9-5HHWl1ZOJO88CfgNuFW5GA&s=10" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8i367ba3j4B0aYBUF0v39d5KNNQe3ZF82Qc0aB_OPhA&s=10" />
        </div>
        
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5eijPX2rb6RTOhlKx2GP2bnj9pL8xZC1gwnkULEHSQ&s=10" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUkXClDSpRJTc0CulasrdVMvOg0p2u8luZj_rz6RK_Q&s" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQD4KA2TdyFKHThYvaFL-escLK_8vBa8Y_43zJEB_kw&s=10"/>
        </div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5eijPX2rb6RTOhlKx2GP2bnj9pL8xZC1gwnkULEHSQ&s=10"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUkXClDSpRJTc0CulasrdVMvOg0p2u8luZj_rz6RK_Q&s"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQD4KA2TdyFKHThYvaFL-escLK_8vBa8Y_43zJEB_kw&s=10"/>
        </div>
        
 
    </section>

  </body>
    </>
  )
}

export default App
