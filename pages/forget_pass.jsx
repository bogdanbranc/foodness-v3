import { useState } from "react";
import styles from "../styles/ForgetPass.module.css";
import { useUserAuth1 } from "./context/UserAuthContext";
import { Alert } from "@mui/material";

const ForgetPass = () => {
    const [email, setEmail] = useState('')
    const [alert1, setAlert] = useState(false);
    let { resetPasswordEmail1 } = useUserAuth1();


    return (
        <div className={styles.body}>
            <div className={styles.signin_form}>
                <h1>Resetare parola</h1>
                <form>
                    <span>Ai uitat parola? Te rog introdu adresa de email. Vei primi o legătură prin email pentru a crea o parolă nouă.</span>
                    <br></br>
                    <br></br>
                    <input type="email" className={styles.input_box} required placeholder="Adresa de e-mail" onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <br></br>
                    {alert1 && (<Alert onClose={() => { setAlert(false) }}>Email-ul pentru resetarea parolei a fost trimis,daca un cont exista cu acesta</Alert>)}
                    <button type="button" className={styles.signup_button} onClick={() => { resetPasswordEmail1(email); setAlert(true); }}>RESETARE PAROLA</button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPass;