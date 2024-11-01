import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Componentes-Navbar/Navbar";
import Home from "./Component/Componentes-Home/Home";
import Promocoes from "./Component/Componentes-Promoções/Promocoes";
import Acessorios from "./Component/Componentes-Acessorios/Acessorios";
import JogosPS5 from "./Component/Componentes-Ps5/Jogosps5";
import ConsolePS5 from "./Component/Componentes-Ps5/Consoleps5";
import JogosPS4 from "./Component/Componentes-Ps4/Jogosps4";
import ConsolePS4 from "./Component/Componentes-Ps4/Consoleps4";
import JogosXBOX from "./Component/Componentes-Xbox/Jogosxbox";
import ConsoleXBOX from "./Component/Componentes-Xbox/Consolexbox";
import JogosNITENDO from "./Component/Componentes-Nitendo/Jogosnitendo";
import ConsoleNITENDO from "./Component/Componentes-Nitendo/Consolenitendo";
import Footer from "./Component/Componentes-Footer/Footer";
import Cadeiras from "./Component/Componentes-Acessorios/cadeiras";
import Fones from "./Component/Componentes-Acessorios/fones";
import Controles from "./Component/Componentes-Acessorios/controles";
import Spiderps5 from "./Component/Componentes-Ps5/Spiderps5";
import Streetps5 from "./Component/Componentes-Ps5/streetfigtherps5";
import Fifaps4 from "./Component/Componentes-Ps4/Fifaps4";
import Gran7 from "./Component/Componentes-Ps4/Gran7";
import "./App.css";
import MK1xbox from "./Component/Componentes-Xbox/mk1xbox";
import Acv from "./Component/Componentes-Xbox/acv";
import Mariok from "./Component/Componentes-Nitendo/mariok";
import Zelda from "./Component/Componentes-Nitendo/zelda";
import Consoleps5normal from "./Component/Componentes-Ps5/consoleps5n";
import Consoleps4normal from "./Component/Componentes-Ps4/consoleps4n";
import Consolexboxnormal from "./Component/Componentes-Xbox/consolexboxn";
import Consolenitendonormal from "./Component/Componentes-Nitendo/consolenitendon";
import Controleps5 from "./Component/Componentes-Acessorios/controleps5";
import Gta5 from "./Component/Componentes-Home/Gtad";
import Ação from "./Component/Componentes-Ps5/Filtro";
import FPS from "./Component/Componentes-Ps5/Filtrofps";
import Luta from "./Component/Componentes-Ps5/Filtroluta";
import Cadastro from "./Component/Cadastro";
import Login from "./Component/Login";
import axios from "axios";

const BaseUrl = "https://devgames-api.azurewebsites.net/swagger/index.html";

class App extends Component{
  
  render() {
    //const  [categoria, setCategoria] = React.useState(null);

  //React.useEffect(() => {
    //axios.get(BaseUrl).then((response) => {
      //setCategoria(response);
   /// });
 //}, []);
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/acessorios" element={<Acessorios/>}/>
          <Route path="/promocoes" element={<Promocoes/>}/>
          <Route path="/consoleps5" element={<ConsolePS5/>}/>
          <Route path="/jogosps5" element={<JogosPS5/>}/>
          <Route path="/consoleps4" element={<ConsolePS4/>}/>
          <Route path="/jogosps4" element={<JogosPS4/>}/>
          <Route path="/consolexbox" element={<ConsoleXBOX/>}/>
          <Route path="/jogosxbox" element={<JogosXBOX/>}/>
          <Route path="/consolenitendo" element={<ConsoleNITENDO/>}/>
          <Route path="/jogosnitendo" element={<JogosNITENDO/>}/>
          <Route path="/cadeiras" element={<Cadeiras/>}/>
          <Route path="/fones" element={<Fones/>}/>
          <Route path="/controles" element={<Controles/>}/>
          <Route path="/buypagespiderps5" element={<Spiderps5/>}/>
          <Route path="/streetps5" element={<Streetps5/>}/>
          <Route path="/fifaps4" element={<Fifaps4/>}/>
          <Route path="/gran7" element={<Gran7/>}/>
          <Route path="/mk1xbox" element={<MK1xbox/>}/>
          <Route path="/acv" element={<Acv/>}/>
          <Route path="/mariok" element={<Mariok/>}/>
          <Route path="/zelda" element={<Zelda/>}/>
          <Route path="/ps5normal" element={<Consoleps5normal/>}/>
          <Route path="/ps4normal" element={<Consoleps4normal/>}/>
          <Route path="/xboxnormal" element={<Consolexboxnormal/>}/>
          <Route path="/nitennormal" element={<Consolenitendonormal/>}/>
          <Route path="/controleps5" element={<Controleps5/>}/>
          <Route path="/gta" element={<Gta5/>}/>
          <Route path="acao" element={<Ação/>}/>
          <Route path="/fps" element={<FPS/>}/>
          <Route path="/luta" element={<Luta/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>       
        <Footer/>
      </Router>
    )
  }
}

export default App