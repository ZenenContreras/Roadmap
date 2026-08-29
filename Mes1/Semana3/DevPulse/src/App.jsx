import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfileCard'
import Technologies from './Components/Technologies'
import Stats from './Components/Stats'

function App() {

  return (
    <div className='min-h-screen flex flex-col max-w-6xl items-center w-full mx-auto px-4 '>
      <Header />
      <div className='flex-1 flex flex-col justify-center '>
        <ProfileCard />
      </div>
      <Footer />
    </div>
  )
}

export default App
