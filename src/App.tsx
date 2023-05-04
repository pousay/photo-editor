import Navbar from "./components/navbar/navbar";
import Photo from "./components/photo/photo";
import Sidebar from "./components/sidebar/sidebar";
function App() {
  return (
    <>
      <div className="dark:bg-zinc-800 min-h-[100vh]">
        <Navbar />
        <div className="flex gap-2">
          <Sidebar />
          <Photo />
        </div>
      </div>
    </>
  );
}

export default App;
