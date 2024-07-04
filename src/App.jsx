import React, {useState} from 'react'
import styles from './style'
import Hero from './Components/Hero'
import "./App.css"

// Set-ExecutionPolicy RemoteSigned -Scope Process



const App = () => {
 
  return (
    <div className="bg-gradient-to-l from-dimBlue to-slate-500 max-w-[490px] rounded-[5px] h-[100vh] my-0 mx-auto sm:max-w-[450px] xl:max-w-[1280px] lg:w-full overflow-hidden">
      <Hero />
    </div>
  )
}

export default App





