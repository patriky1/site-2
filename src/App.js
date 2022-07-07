import "./App.css";

import {GridPerfil} from "./componentes/grid/grid1";

import Home from "./componentes/navbar/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";



function App() {
  return (
<>
<section id="home" className="background">
<GridPerfil/>
<Home/>
</section>
</>
  );
}

export default App;
