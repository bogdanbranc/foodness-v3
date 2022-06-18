import styles from "../styles/Produse.module.css";
import Image from "next/image";

const Produse = () =>{
    return (
        <div className={styles.body}>
            <p className={styles.title}>Descopera preparatele noastre</p>
            <div className={styles.container}>
                <div className ={styles.row}>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img1.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>Desert <span>Moleaux</span></h2>
                            <p>Ciocolata amaruie 75% cacao</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img2.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>Desert <span>Banana cake</span></h2>
                            <p>Lamaie si bucati de banana</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img3.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>Desert <span>Black&white chocolate</span></h2>
                            <p>Blat si glazura cu ciocolata</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img4.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>Desert <span>Cheesecake</span></h2>
                            <p>Jeleu de capsuni si capsuni proaspete</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img5.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>MIC DEJUN <span>OU IN CRUSTA</span></h2>
                            <p>Asezonat cu champignon</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img6.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>MIC DEJUN <span>Ou Mediteranean</span></h2>
                            <p>Mix de legume fresh</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img7.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>MIC DEJUN <span>Budinca chia</span></h2>
                            <p>Piersici si dulceata de curmale</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img8.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>Supa <span>Crema ciuperci</span></h2>
                            <p>Crutoane si mini ciupercute</p> 
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image className={styles.img} src="/img2/img9.jpg" layout="fill"/>
                        <div className={styles.details}>
                            <h2>Supa <span>Crema dovleac</span></h2>
                            <p>Crutoane si seminte dovleac</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produse;