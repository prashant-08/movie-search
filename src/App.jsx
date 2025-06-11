import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './routes/MainRoutes'

import ThemeContext from './context/ThemeContext'
import { useState } from 'react'

function App() {
  // console.log(import.meta.env.VITE_API_KEY)
  const [theme, setTheme] = useState('dark')
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='app-wrapper' data-theme={theme}>
          <Navbar />
          <MainRoutes />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
