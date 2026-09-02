import React from 'react'
import Stats from './Stats'
import Technologies from './Technologies'
import { useState } from 'react'

function ProfileCard({user}) {

  const [isFollowing, setIsFollowing] = useState(false)
  const [followers, setFollowers] = useState(1250)
  const [isOnline, setisOnline] = useState(true)
  const [technologies, setTechnologies] = useState([])
  const [technologieInput, setTechnologieInput] = useState("")

  const stats= {
    repositories: 42,
    followers: 120,
    following: 80
  }

  function handleFollow(){
    
    setIsFollowing(!isFollowing)

    if(isFollowing){
      setFollowers(prev => prev - 1)
    }else{
      setFollowers(prev => prev + 1)
    }
  }

  function handleSkills(event){
    event.preventDefault()

    if(!technologieInput.trim()){
      return
    }else{
      setTechnologies([...technologies, technologieInput])
      console.log('formejecutado')
      setTechnologieInput("")
    }
  }

  return (
    <div className='rounded-xl p-4 max-w-xl flex flex-col gap-2 shadow-lg items-center border'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-semibold '>{user?.name}</h2>
        <div className='flex justify-between'>
          <div>
            <p className='text-tertiary '>{user?.country}</p>
            <p className='text-tertiary'>{user?.rol}</p>
          </div>

          <div className='flex flex-col gap-4'>

            <button className='text-sm border py-1 px-2 rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md' onClick={handleFollow}>
                {isFollowing ? <span>Following</span> : <span>Follow</span>}
            </button>

            <button className='text-sm border py-1 px-2 rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md' onClick={() => setisOnline(!isOnline)}>
              {isOnline ? <span> 🟢 Online</span> : <span> 🔴 Offline</span>}
            </button>

            <form onSubmit={handleSkills} className='flex flex-col gap-4 '>
              <input type="text" value={technologieInput} className='border rounded-xl py-1 px-2' placeholder='Type your skills' onChange={(event) => setTechnologieInput(event.target.value)}/>

              <button disabled={!technologieInput.trim()} type='submit' className='text-sm border py-1 px-2 rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer'>
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>

      <div className='flex items-center justify-between w-full flex-wrap'>
        <Stats stats={stats} followers={followers} />
        <Technologies technologies={technologies} setTechnologies={setTechnologies} />
      </div>   

    </div>
  )
}

export default ProfileCard