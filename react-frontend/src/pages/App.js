import '../App.css';
import Header from '../components/header';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  function handleLogin(credentialResponse){
    fetch("http://localhost:8000/auth/verify",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${credentialResponse.credential}`
        }
      }
    )
    .then(
      res => {
        if(!res.ok){
          throw new Error(`Authentication Error! status: ${res.status}. Message: ${res.statusText}`);
        }
        console.log("Success!");
        return res.json();
      }
    )
    .then(
      data => {
        localStorage.setItem("user", JSON.stringify(data));
        // window.location.href = "profile.html";
      }
    )
    .catch(
      error => console.log(`Credential Handler Error: ${error}`)
    )
  }
  
  return (
    <div className="App">
      <Header />
      <div>
        <GoogleOAuthProvider clientId="632427256455-90f00d3r3di4emog5o9tpjehlcpeq0r0.apps.googleusercontent.com">
          <div className='signin_container'>
            <GoogleLogin 
              onSuccess = {handleLogin}
              onError = {err => {
                    console.log(`Login Failed: ${err}`);
                }
              }
              useOneTap
              shape="pill"
            />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default App;
