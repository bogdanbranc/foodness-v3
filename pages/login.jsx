import Image from "next/image";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import { useUserAuth1 } from "./context/UserAuthContext";
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { logIn, googleSignIn } = useUserAuth1();



  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      router.push('/')
    }
    catch (err) {
      setError(err.message);
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      router.push('/')
    }
    catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className={styles.body}>
      <div className={styles.signin_form}>
        <h1>Conectare</h1>
        <form >
          {error && <Alert variant='danger'>{error}</Alert>}
          <input type="email" className={styles.input_box} required placeholder="Adresa de e-mail" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className={styles.input_box} required placeholder="Parola" onChange={(e) => setPassword(e.target.value)} />
          <a href="/forget_pass">Ai uitat parola?</a>
          <br></br>
          <br></br>

          <button type="button" className={styles.signin_button} onClick={handleSubmit}>Conectare</button>
          <p>Nu ai inca cont? <a href="/register">Inregistreaza-te</a></p>
          <hr />
          <p className={styles.or}>SAU</p>

          <button type="button" className={styles.signin_button_google} onClick={handleGoogleSignIn}>
            <Image src="/img/google.png" width="25" height="25" />Continua cu Google
          </button>
          <button type="button" className={styles.signin_button_facebook}>
            <Image className={styles.icon} src="/img/facebook.png" width="25" height="25" />Continua cu Facebook
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;