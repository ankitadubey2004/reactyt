// 1>
// import React from 'react'

// const App = () => {
//   let user = "Ankita"

//   const changeUser = ()=>{
//     console.log(user)
//     user = "Aryan"
//     console.log(user)
//   }

//   return (
//     <div>
//       <h1>UserName is {user}</h1>
//       <button onClick={changeUser}>Change User</button>
//     </div>
//   )
// }

// export default App

// 2) 
//  import React, { useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(10)

//   const changeA = ()=>{
//     console.log("chal gya")
//     setA(20)
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Change A</button> 
//     </div>
//   )
// }

// export default App
       {/* jab yahan button click karenge to changeA function pass jaayega aur kahega ki change karo so here setA() function chalega , aur indireectly ye react se keh raha change kerdo 10 se 20 hoga phir */}


// import React, { useState } from 'react'

// const App = () => {
//        const [num, setNum] = useState(0)
//   return (
//     <div>
//        <h3>Number is {num}</h3>
//        <button onClick={()=>setNum(num+10)}>Increment</button>
//        <button onClick={()=>setNum(num-10)}>Decrement</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Product from './pages/Product';
// import Home from './pages/Home';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <div>
//       <Header />

//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/contact' element={<Contact />}/>
//         <Route path='/product' element={<Product />}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext)
  return (
    <div>
      <h1>This is App.js {data}</h1>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App