import './App.css';
import NoteEdit from './components/NoteInput';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="main">
      <Header />
      <div id="noteEdit">
        <NoteEdit />
      </div>
      <Footer />
    </div>
  );
}

export default App;
