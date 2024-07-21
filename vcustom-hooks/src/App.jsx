import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './assets/hooks/useCounter'
import useCopyToClipboard from './assets/hooks/useCopyToClipboard'

function App() {
  const {count, increase, decrease} = useCounter()
  const [copy,Copy] = useCopyToClipboard("pes etme")
  return (
    < >
      <div>
          {copy && "Copied"}
      </div>
      <div>
        <button onClick={Copy}>Copy</button>
      </div>
    </>
  )
}

export default App
