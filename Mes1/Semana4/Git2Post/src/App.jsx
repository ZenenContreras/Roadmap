import './App.css'
import Hero from './components/Hero'
import useGit2Post from './hooks/UseGit2Post'

function App() {
  const { state } = useGit2Post()

  console.log(state)

  return (
    <Hero />
  )
}

export default App
