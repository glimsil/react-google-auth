import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './App.css';

function App() {
  return (
    <div>
      Hello World
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          console.log(jwtDecode(credentialResponse.credential));
          alert("Login succeeded");
        }}
        onError={() => {
          console.log('Login failed');
        }}
      />
    </div>
  );
}

export default App;
