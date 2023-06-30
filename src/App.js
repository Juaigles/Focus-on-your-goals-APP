import logo from './logo.svg';
import './App.css';
import Header from "./components/shared/Header"
import Main from "./components/shared/Main"
import Footer from "./components/shared/Footer"
import List from './components/list/List'
import Details from './components/new/Details';


function App() {
  return (
    <div >
     
      <Header></Header>
      <Main>
        {/* <List></List> */}
        <Details></Details>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
