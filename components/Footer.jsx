import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                       DACA SIMTI CA ESTI LA DIETA,ITI DAM BANII INAPOI !!
                    </h2>
                    <h4>**Se aplica doar in prima zi comandata</h4>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>NE PUTETI GASI IN:</h1>
                    <p className={styles.text}>
                        Strada Barbu Lautaru 52
                        <br/> Romania,Arad
                    </p>
                    <br/>
                    <p className={styles.text}>
                        Complexul Studentesc 43
                        <br/> Romania,Timisoara
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>ORAR CALL CENTER</h1>
                    <p className={styles.text}>
                        LUNI-VINERI
                        <br/> 8:00 - 17:00
                    </p>
                    <br/>
                    <h1 className={styles.title}>ORAR LIVRARE MENIURI</h1>
                    <p className={styles.text}>
                        LUNI-VINERI
                        <br/> 7:00 - 11:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer