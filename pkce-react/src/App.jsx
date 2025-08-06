
import { useContext, useEffect, useState } from 'react'
import './App.css'
import { AuthContext } from 'react-oauth2-code-pkce'

function App() {

  const {token, tokenData, logIn, logOut, isAuthenticated} = useContext(AuthContext);
  const [message,setMessage] = useState('');

  useEffect(() => {
    if(token) {
      console.log("Token available "+ token)
      fetchFromApi(token);
    }
  }, [token]);

  //u can use axios here
  const fetchFromApi = async (token) => {
    try {
      const response = await fetch("http://localhost:8081/api/home", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'text/plain; charset=utf-8'
        }
      });
      if(response.ok){
        const text = await response.text();
        setMessage(text);
      }
    } catch (error) {
      console.warn("API ERROR: ", error)
      setMessage("api error");
    }
  }

  return (
    <>
      <div style={{padding: '2rem'}}>
        <h1>OAuth2 PKCE Demo</h1>
        <p>Message from api : </p>
        <p>{message}</p>
        <div>
          {
            !token ? (
              <button onClick={() => logIn()}>
                Login
              </button>
            ) : (
              <button onClick={() => logOut()}>
                Log out
              </button>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
