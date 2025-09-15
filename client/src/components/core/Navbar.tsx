


const Navbar = () => {
  return (
   <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Content Summarizer</h1>
          <nav className="space-x-4 text-sm text-gray-600">
            <button className="px-3 py-1 rounded-md hover:bg-gray-100">Docs</button>
            <button className="px-3 py-1 rounded-md hover:bg-gray-100">Settings</button>
            <button className="px-3 py-1 rounded-md bg-indigo-600 text-white ">Sign in</button>
          </nav>
        </div>
      </div>
  )
}

export default Navbar