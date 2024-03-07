import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  let content;
  if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  } else if(projectsState.selectedProjectId === null) {
    content = <NewProject/>
  }


  return (
    <main className="flex gap-8 h-screen my-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
