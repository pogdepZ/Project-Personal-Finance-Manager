import { useState } from 'react'
import Layout from './Layout/Layout'
import { useRoutes } from 'react-router-dom'
import routers from './app/routers'

function App() {
  const element = useRoutes(routers)
  return (
    <>
      {element}
    </>
  )
}

export default App
