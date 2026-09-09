import UseGit2Post from '../hooks/UseGit2Post'

function Landing() {
  const { state, dispatch } = UseGit2Post()

  return (
    <section className='flex flex-col items-center bg-amber-950 min-h-screen text-white gap-4'> 
 
      <h1>Turn your GitHub activity into content.</h1>
      <p>Transform your commits, repositories and development activity into professional content </p>

      <button className='border py-1 px-1 rounded-lg bg-amber-50 text-black cursor-pointer hover:scale-102 duration-200 active:scale-95' onClick={() => dispatch({ type: 'SET_USER', payload: {login: "demo-user", name: "Demo Developer"} })}>
        Connect Github
      </button>

      <button className='border py-1 px-1 rounded-lg bg-amber-50 text-black cursor-pointer hover:scale-102 duration-200 active:scale-95'  onClick={() => dispatch({type: 'SET_REPOSITORIES', payload: [
          {
              id: 1,
              name: "portfolio"
          },
          {
              id: 2,
              name: "devpulse"
          }
      ]})}
      >
        Set repositories
      </button>

      <h1>{state.user ? state.user?.name : 'No user connected'}</h1>

      {state.repositories ? state.repositories.map(repository => (
        <div>
          <h2>{repository.name}</h2>
          <button className='border py-1 px-1 rounded-lg bg-amber-50 text-black cursor-pointer hover:scale-102 duration-200 active:scale-95'  onClick={() => dispatch({type: 'SELECT_REPOSITORY' , payload: repository.name})}>Select</button>
        </div>
      )) : 'No repositories connected'}

      <h2>Selected repository: {state.selectedRepository}</h2>
      
      <button className='border py-1 px-1 rounded-lg bg-amber-50 text-black cursor-pointer hover:scale-102 duration-200 active:scale-95' onClick={() => dispatch({ type: 'SET_GENERATED_POST', payload: 'Just shipped a new feature using react and github'})}>
        Generated post
      </button>

      {state.generatedPost}

      <button className='border py-1 px-1 rounded-lg bg-amber-50 text-black cursor-pointer hover:scale-102 duration-200 active:scale-95' onClick={() => dispatch({ type: 'RESET'})}>
        Reset
      </button>

    </section>
  )
}

export default Landing
