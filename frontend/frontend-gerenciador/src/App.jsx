import React from 'react'
import FornecedorList from './pages/fornecedor/FornecedorList'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <FornecedorList/>
    </BrowserRouter>
  )
}

export default App