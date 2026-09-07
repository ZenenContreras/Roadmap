import useGit2Post from '../hooks/UseGit2Post'

function Hero() {
  const { state, dispatch } = useGit2Post()

  return (
    <section>
      <h1>Turn your GitHub activity into content.</h1>
      <p>Transform your commits, repositories and development activity into professional content </p>
      <button onClick={() => dispatch({ type: 'SET_USER', payload: 'Zenen' })}>
        Connect Github
      </button>
      <h1>{state.user}</h1>
    </section>
  )
}

export default Hero
