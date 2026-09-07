
import './App.css'
import Hero from './components/Hero'
import Git2PostContext from './context/Git2PostContext'


function App() {

  return (
    <Git2PostContext>
      <Hero />
    </Git2PostContext>
  )
}

export default App
