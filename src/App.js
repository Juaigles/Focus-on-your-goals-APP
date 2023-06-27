import logo from './logo.svg';
import './App.css';
import Header from "./components/shared/Header"
import Main from "./components/shared/Main"
import Footer from "./components/shared/Footer"


function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline'>
        Help World
      </h1>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
