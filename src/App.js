import React from 'react'
import Header from "./components/Header/Header"
import Recipes from "./components/Recipes/Recipes"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Recipes />
      <Footer />
    </React.Fragment>
  )
}

export default App