import styles from "../styles/Location.module.css";

const Location = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>UNDE LIVRAM?</h1>
            <div className={styles.container2}>
                <div className={styles.Timisoara}>
                    <h2 className={styles.title}>Timisoara</h2>
                </div>
                <div className={styles.Arad}>
                    <h2 className={styles.title}>Arad</h2> 
                </div>
                <div className={styles.Oradea}>
                    <h2 className={styles.title}>Oradea</h2>  
                </div>
            </div>
        </div>
    )
}

export default Location;