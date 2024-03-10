import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [selectedProject, setSelectedProject] = useState();

  function handleStartAddProject () {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject (projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleSelectProject (project) {
    setSelectedProject(project);
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: project.id,
      }
    })
  }

  console.log(projectsState);

  let content;
  if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  } else if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else {
    content = <SelectedProject project={selectedProject} />
  }


  return (
    <main className="flex gap-8 h-screen my-8">
      <SideBar 
        onStartAddProject={handleStartAddProject} 
        onSelectProject={handleSelectProject}
        projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
