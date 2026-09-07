
import './App.css'
import Hero from './components/Hero'
import Git2PostContext from './context/Git2PostContext'
import useGit2Post from './hooks/UseGit2Post'


function App() {

  const {state, dispatch} = useGit2Post()
  
  return (
    <Git2PostContext>
      <Hero />
    </Git2PostContext>
  )
}

export default App
