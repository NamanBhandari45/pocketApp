import React from "react";
import Sidebar from "./Components/sidebar/sidebar";
import Notes from "./Components/notes/notes";


function App() {
  return (
    <div style={{display:"flex"}}>
     <Sidebar />
     <Notes />
    </div>
  );
}

export default App;
