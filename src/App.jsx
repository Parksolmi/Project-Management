import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";


function App() {
  return (
    <main className="flex gap-8 h-screen my-8">
      <SideBar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
