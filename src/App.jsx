import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="flex gap-4 p-4 bg-slate-800 text-white">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind React!</h1>
        <button className="mt-5 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App
