function Posts() {
  return (
    <section className="min-h-screen bg-amber-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-4xl font-bold">Generated Posts</h1>

        <div className="rounded-xl border border-dashed border-amber-700 bg-amber-900/30 p-10 text-center">
          <p className="text-lg text-amber-100">No posts generated yet.</p>
          <button
            type="button"
            className="mt-6 rounded-lg border bg-amber-50 px-5 py-2 text-black duration-200 hover:scale-102 active:scale-95"
          >
            Create your first post
          </button>
        </div>
      </div>
    </section>
  )
}

export default Posts
