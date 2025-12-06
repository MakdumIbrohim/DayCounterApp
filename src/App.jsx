import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="ml-4 mt-4 flex-grow">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to the Day Counter App!
        </h2>
        <p className="mb-4">
          Use the date picker below to select a range of dates and calculate the
          number of days between them.
        </p>
        <Home />
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; 2023 Makdum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
