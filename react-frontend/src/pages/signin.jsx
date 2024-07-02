import styles from '../assets/css-modules/signin.module.css';
import signinStyles from '../assets/css-modules/signin.module.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function SignIn() {

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
    <div className={styles.container}>
      <div>
        <GoogleOAuthProvider clientId="632427256455-90f00d3r3di4emog5o9tpjehlcpeq0r0.apps.googleusercontent.com">
          <div className={signinStyles.signinContainer}>
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

export default SignIn;