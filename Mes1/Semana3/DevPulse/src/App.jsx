import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfileCard'
import Technologies from './Components/Technologies'
import Stats from './Components/Stats'
import { GitHubCalendar } from 'react-github-calendar';
import SearchBar from './Components/SearchBar'


function App() {

  const user = {
    name: "Zenen Contreras Royero",
    rol: "Sotware Enginner",
    country: "Colombia",
  }

  return (
    <div className='min-h-screen flex flex-col max-w-6xl items-center w-full mx-auto px-4 '>
      <Header />
      <div className='flex-1 flex flex-col justify-center items-center gap-4 '>
        <SearchBar />
        <ProfileCard user={user} />
        <GitHubCalendar username='zenencontreras'/>
      </div>
      <Footer />
    </div>
  )
}

export default App
