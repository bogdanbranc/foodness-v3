import styles from "../styles/About.module.css";
import Link from 'next/link'

const About = () => {
    return(
        <section className={styles.about}>
            <div className={styles.content}>
                <img src="/img/about.png" alt=""/>
                <div className={styles.text}>
                    <h1>Misiunea noastra</h1>
                    <h5>Motivatia noastra esti tu!</h5>
                    <p> Echipa Foodness este aici sa ajute persoanele care , nu au indeajuns timp sau cunostiinte necesare pentru a gati sanatos 
                        si care valorizeaza o viata sanatoasa si un corp ingrijit, sa scape definitiv de gandul ,,Eu ce mananc astazi?” prin intermediul
                        aplicatiei noastre web care le va permite configurarea meniurilor in functie de preferinte,saptamanal sau chiar zilnic iar asta le va permite 
                        sa aibe o viata sanatoasa,un aspect fizic placut si timp liber in plus de care sa se bucure.
                    </p>
                    <button className={styles.buton} type="button"><Link href="/meniu">Descopera meniurile</Link></button>
                </div>
            </div>
        </section>
    )
}

export default About;