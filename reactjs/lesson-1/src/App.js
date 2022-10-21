
import './App.css';
import List from './components/List'
import Specialsong from './components/Specialsong';
import {lists} from './data/store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {lists.map((item,index) => {
          return(
            <List img = {item.img} title = {item.title} artists = {item.artists} remaintime = {item.remaintime} key = {index}/>
          )
        })}
        </header>
        <Specialsong/>
    </div>
  );
}

export default App;
