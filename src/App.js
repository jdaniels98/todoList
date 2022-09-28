import './App.css';
import NoteEdit from './components/NoteInput';

function App() {
  return (
    <div id="main">
      <header>
        <h1>NOTEPAD</h1>
      </header>
      <div id="noteEdit">
        <NoteEdit />
      </div>
    </div>
  );
}

export default App;
