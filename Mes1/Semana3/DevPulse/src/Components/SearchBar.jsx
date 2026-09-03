import { LoaderCircle, Search } from 'lucide-react'

function SearchBar({ handleSearch, search, setSearch, isLoading }) {
  return (
    <form onSubmit={handleSearch} className='flex w-full items-center gap-3 border-b border-border'>
      <Search size={16} strokeWidth={1.75} className='shrink-0 text-muted-foreground' />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground'
        type='text'
        placeholder='Search a GitHub user…'
      />

      <button
        type='submit'
        disabled={isLoading || !search.trim()}
        className='flex shrink-0 cursor-pointer items-center gap-1.5 py-2 text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:text-muted-foreground'
      >
        {isLoading ? (
          <LoaderCircle size={16} strokeWidth={1.75} className='animate-spin' />
        ) : (
          'Search'
        )}
      </button>
    </form>
  )
}

export default SearchBar
