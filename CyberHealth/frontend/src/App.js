
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Screens/SignupScreen'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact></Route>
        </Routes>
      </Router>
    </>
    );
}

export default App;
