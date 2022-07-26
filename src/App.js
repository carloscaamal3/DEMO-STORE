import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import {Paginas} from './componentes/Paginas';
import {Header} from './componentes/Header';
import {ProductosLista} from './componentes/Productos/index';


import 'boxicons';


function App() {
  return (
 
    <div className="App">
  
      <Header/>
  <ProductosLista/>
 

    </div>

  );
}

export default App;
