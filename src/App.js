// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='Text Case Converter'/>
      <TextForm headings ='Enter The Text To Analyze Below. '/>
    </>
  );
}

export default App;
