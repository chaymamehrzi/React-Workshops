import logo from './logo.svg';
import './App.css';
import { pushT } from './Ecmascript/fonction.js';
import { totalNotes} from './Ecmascript/fonction.js'
import {findLongestWord} from './Ecmascript/fonction.js'
function App() {


 let tab =['tab1','tab2'];


 console.log(findLongestWord(tab));





  let students=[{name :'chayma' , id :1 , marks : 25},
  {name :'mohamed' , id :2 , marks : 30},
  {name :'yasssine' , id :3 , marks : 70},];
  console.log(totalNotes(students));

  let tabObj=[{name :'chayma' , fonction : "etudiant"},
  {name :'mohamed' , fonction : "professeur"},
  {name :'soukaina' , fonction :"directeur "},];
console.log(pushT(tabObj));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </div>
    );
   
   
}

export default App;