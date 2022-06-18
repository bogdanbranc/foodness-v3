import styles from "../styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
    
    return(
        <div className={styles.container}>
            <div className={styles.contactUs}>
              <div className={styles.title}>
                  <h2 className={styles.title_text}>Intra in legatura cu noi</h2>
              </div>
              <div className={styles.box}>
                  <div className={styles.contact_form}>
                      <h3>Trimite-ne un mesaj</h3>
                      <form>
                          <div className={styles.formBox}>
                              <div className={styles.row50}>
                                  <div className={styles.inputBox}>
                                      <span>Nume</span>
                                      <input type="text" placeholder="John Doe"/>
                                  </div>
                              </div>
                              <div className={styles.row50}>
                                  <div className={styles.inputBox}>
                                      <span>Email</span>
                                      <input type="text" placeholder="johndoe@email.com"/>
                                  </div>
                                  <div className={styles.inputBox}>
                                      <span>Telefon</span>
                                      <input type="text" placeholder="+40 074 709 1311"/>
                                  </div>
                              </div>
                              <div className={styles.row100}>
                                  <div className={styles.inputBox}>
                                      <span>Mesaj</span>
                                      <textarea className={styles.textarea1} placeholder="Scrie aici mesajul tau..."></textarea>
                                  </div>
                              </div>
                              <div className={styles.row100}>
                                  <div className={styles.inputBox}>
                                      <input className={styles.input_submite} type="submit" value="Trimite"/>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div className={styles.contact_info}>
                      <h3>Informatii contact</h3>
                      <div className={styles.infoBox}>
                          <div>
                              <span><ion-icon name="location"></ion-icon></span>
                              <p>Barbu Lautaru,Arad <br/>ROMANIA</p>
                          </div>
                          <div>
                              <span><ion-icon name="mail"></ion-icon></span>
                              <a href="mailto:bogdan_branc99@yahoo.com">bogdan_branc99@yahoo.com</a>
                          </div>
                          <div>
                              <span><ion-icon name="call"></ion-icon></span>
                              <a href="tel:+40 0747091311">+40 074 709 1311</a>
                          </div>
                          <ul className={styles.sci}>
                              <li><a href="https://www.facebook.com/bogdan.branc/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                              <li><a href="https://www.instagram.com/bogdanbranc/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                              <li><a href="https://www.youtube.com/channel/UCRe3wZm_Id52lE65RLSI5sQ"><ion-icon name="logo-youtube"></ion-icon></a></li>
                              <li><a href="#"><ion-icon name="logo-tiktok"></ion-icon></a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={styles.contact_map}></div>
              </div>
            </div>
        </div>
    )
}

export default Contact