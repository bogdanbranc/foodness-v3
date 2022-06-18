import { useState } from "react";
import { Alert } from "react-bootstrap";
import styles from "../styles/Register.module.css";
import { useUserAuth1 } from "./context/UserAuthContext";
import { useRouter } from 'next/router'

const Register = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const [error, setError] = useState('')
    const { signUp } = useUserAuth1();



    const handleSubmit = async (e) => {


        e.preventDefault();
        setError('')
        try {
            if (password !== confirmedPassword) {
                setError('Parolele nu corespund');
                return;
            }
            await signUp(email, password)
            router.push('/')
        }
        catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.signin_form}>
                <h1>Inregistrare</h1>
                <form>
                    <input type="email" className={styles.input_box} required placeholder="Adresa de e-mail" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className={styles.input_box} required placeholder="Parola" onChange={(e) => setPassword(e.target.value)} />
                    {error && <Alert variant="danger">{error}</Alert>}
                    <input type="password" className={styles.input_box} required placeholder="Confirma Parola" onChange={(e) => setConfirmedPassword(e.target.value)} />
                    <br></br>
                    <br></br>
                    <span><input type="checkbox" required /></span><a href="#" className={styles.exclam}>Sunt de acord cu termenii si conditiile(click) </a>
                    <button type="button" className={styles.signup_button} onClick={handleSubmit}>Inregistreaza</button>
                </form>
            </div>
        </div>
    )
}
export default Register