import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div
      className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <Todo/>
    </div>
  )
}

export default App