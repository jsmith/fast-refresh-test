import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useUser } from './auth'

function App() {
  const { name } = useUser();
  console.log('App.jsx')

  return (
    <div>{`My name is ${name}`}</div>
  )
}

export default App
