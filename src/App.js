import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage

const getFromLocalStorage=()=>{

  if(localStorage.getItem('theme')){
    return localStorage.getItem('theme');
  }else{
    return 'light-mode'
  }

}

// returna il suo valore o di default return 'light-mode'

function App() {

  const[theme,setTheme]=useState(getFromLocalStorage());

  // funzione che cambia il tema

  const cambiaTema=()=>{
    if(theme==='light-mode'){
    setTheme('dark-mode')
  }else{
    setTheme('light-mode')
  }
}

// Al mutare del theme state,attacca una classe al nostro HTML tag
useEffect(()=>{
  document.documentElement.className=theme;
  localStorage.setItem("theme", theme);
},[theme]);



  return (
    <section className="section-center">
      <div className="container">
        <button onClick={cambiaTema} className="btn">
          Cambia
        </button>
        <section className="article-section">
          {
            data.map(el=> <Articolo key={el.id} {...el}/>) 
          }
        </section>
      </div>
    </section>
  );
}

export default App;