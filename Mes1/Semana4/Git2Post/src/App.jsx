import './App.css'
import AppRouter from './router/AppRouter'
import UseGit2Post from './hooks/UseGit2Post'

function App() {
  const { state } = UseGit2Post()

  console.log(state)

  return (
    <AppRouter />
  )
}

export default App
