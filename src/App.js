import './App.css';
import Navbar from './Components/Navbar';
import Login from './page/Login';
import Signup from './page/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Login/>
     {/* <Signup/> */}
    </div>
  );
}

export default App;
