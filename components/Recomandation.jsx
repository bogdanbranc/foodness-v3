import styles from "../styles/Recomandation.module.css";
import Image from "next/image";

const Recomandation = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>De ce sa alegi meniurile Foodness</h1>
            <div className={styles.container2}>
                <div className={styles.cart}>
                    <h2 className={styles.titlecart}>Valori nutritionale</h2>         
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Vezi totalul de kcal pentru fiecare masa</p>
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Ideal pentru slabit sau masa musculara</p>
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Portii generoase pentru satietate</p>
                </div>
                <div className={styles.cart}>
                    <h2 className={styles.titlecart}>Toti nutrientii asigurati</h2>      
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Minim 160g proteine asigurate zilnic</p>
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Necesarul de minim 25g de fibre pe zi</p>
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Aport de vitamine si minerale</p>
                </div>
                <div className={styles.cart}>
                    <h2 className={styles.titlecart}>Proaspat si diversificat</h2>      
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Proaspat gatite apoi direct livrate</p>
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> 3 sortimente din fiecare masa , zilnic</p>
                    <p className={styles.motiv}><Image src="/img/checked.png" alt="" width="15" height="15"/> Fara sa simti ca esti la ,,dieta"</p>
                </div>
            </div>
        </div>
    )
}

export default Recomandation;