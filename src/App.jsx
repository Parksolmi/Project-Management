import Home from "./components/Home";
import SideBar from "./components/SideBar";


function App() {
  return (
    <main className="flex flex-row h-screen">
      <SideBar/>
      <Home/>
    </main>
  );
}

export default App;
