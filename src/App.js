import {  useRef, useState } from 'react'
import HomeSection from './components/home'

const User = () => {
const [cardNumber, setNumber] = useState('')
const [cvcNumber, setCvcNumber] = useState('')

const cardRef = useRef(null)
const cvcRef = useRef(null)

const handleInput = (e) => {
  const val = e.target.value;
  setNumber(val);
  if(val.length === 16) {
    cardRef.current.focus()
  }
}

const handleInputCvc = (e) => {
  const val = e.target.value;
  setCvcNumber(val);
  if(val.length === 3) {
    cvcRef.current.focus()
  }
}

  return (
    <>
      <div>
        <input placeholder="Card number" onChange={handleInput} value={cardNumber} />
        <input ref={cardRef} placeholder="secure number" onChange={handleInputCvc} value={cvcNumber} />
        <input ref={cvcRef} placeholder="Year/Month" />
      </div>
    </>
  )
}

const App = () => {
  return (
    <>
      <HomeSection />
    </>
  )
}

export default App;