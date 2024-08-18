import React from 'react'
import PushButton from './components/PushButton'

const App = () => {
  return (
    <div className='flex justify-center items-center'>

    <PushButton btnFunction={()=>console.log("I was pressed")} btnName='Press me'/>
    </div>
  )
}

export default App