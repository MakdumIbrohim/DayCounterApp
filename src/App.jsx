import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-200">
      <Navbar />

      <div className="ml-4 mt-4 flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to the Day Counter App!
        </h2>
        <p className="mb-4">
          Use the date picker below to select a range of dates and calculate the
          number of days between them.
        </p>
        <Home />
      </div>

      <footer className="bg-gray-800 dark:bg-gray-700 text-white text-center py-4 mt-8">
        <p>&copy; 2023 Makdum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
