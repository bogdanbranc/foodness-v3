import styles from "../styles/Steps.module.css";
import Image from "next/image";

const Steps = () =>{
    return (
       <div className={styles.container}>
           <h1 className={styles.title}>CARE SUNT PASII DE URMAT?</h1>
           <p className={styles.desc}>
               Pentru a cunoaste demersul complet a unei comenzi finalizate cu succes,va rugam sa urmariti pasii de mai jos.
           </p>
           <div className={styles.container2}>
               <div className={styles.container_card}>
                   <h1 className={styles.title_card}>CONFIGUREZI</h1>
                   <Image src="/img/step1.png" alt="" width="70" height="70" />
                   <p className={styles.desc_card}>
                      Intri in sectiunea Meniu,alegi data,meniul preferat si ora de livrare
                   </p> 
               </div>
               <div className={styles.container_card}>
                   <h1 className={styles.title_card}>PREGATIM</h1>
                   <Image src="/img/step2.png" alt="" width="70" height="70" />
                   <p className={styles.desc_card}>
                      Preluam comanda pana in ora 17:00 si o pregatim cu toata pasiunea
                   </p> 
               </div>
               <div className={styles.container_card}>
                   <h1 className={styles.title_card}>LIVRAM</h1>
                   <Image src="/img/step3.png" alt="" width="70" height="70" />
                   <p className={styles.desc_card}>
                      Iti livram gratuit meniul proaspat gatit chiar la usa ta
                   </p> 
               </div>
               <div className={styles.container_card}>
                   <h1 className={styles.title_card}>SAVUREZI</h1>
                   <Image src="/img/step4.png" alt="" width="70" height="70" />
                   <p className={styles.desc_card}>
                      Te bucuri de mancare si timpul economisit si beneficiezi de toti nutrientii
                   </p> 
               </div>
            </div>
        </div>
    )
}

export default Steps