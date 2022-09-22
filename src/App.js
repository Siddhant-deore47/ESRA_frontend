import './App.css';
import RegisterUser from './Components/registration';
import SignIn from './Components/signIn';

function App() {
  return (
    <div className="container">
      <RegisterUser/>
      <SignIn/>
    </div>
  );
}

export default App;
