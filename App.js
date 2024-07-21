import logo from './logo.svg';
import React,{ useState } from'react';
import './App.css';
import Database from './bd.js';
import {Listagem,GetUsernames,GetNextId} from './bdgestao.js'
import NovoUser from './usernovo.js';
import styles from './styles.js'

//Base de dados
const BD = new Database(); 

function App() {
  const [editar, setEditar] = useState(1);
  const [dadosNv,setDadosNv] = useState(0);
  const [dadosRm,setDadosRm] = useState(0); 
  const FBotNovo   = (a) => { 
      //BD.data.push(a);
      setDadosNv(a);
      console.log(a); 
      console.log(BD);
  }; 
  const BtlstRemover = (a) => {
       //BD.data.splice(a,1);
       setDadosRm(a);
       console.log(a);
       console.log(BD);
  };
  const BtFuncEditar = (a) => {
      if (editar) setEditar(0);
      else setEditar(1);
  };

  if (dadosNv!==0) {
      BD.data.push(dadosNv);
      setDadosNv(0);
  }
  if (dadosRm!==0) {
      BD.data.splice(dadosRm,1);
      setDadosRm(0);
  }

  
  return (
    <div className="App">
      <header className="App-header">
            <div style={styles.cabecalho}>Ricardo Costa, Microcredencial ReactJs</div>
            <Listagem Db={BD} BtRemover={BtlstRemover} BtView={editar} Btfunceditar={BtFuncEditar}/>
 {editar ?  <NovoUser Acrescentar={FBotNovo} activeUsers={GetUsernames(BD.data)} newId={GetNextId(BD)}/> : <img src={logo} className="App-logo" alt="logo" />}

      </header>
    </div>
  );
}

export default App;
