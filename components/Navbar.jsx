import Image from "next/image";
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'
import { useUserAuth1 } from "../pages/context/UserAuthContext";
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navbar = () => {
    const cart2 = useSelector((state) => state.cart.value);
    const router = useRouter()
    let { user, logOut } = useUserAuth1();

    const [isSSR, setIsSSR] = useState(0);

    useEffect(() => {
        const cartLength = cart2.cart?.length ? cart2.cart.length : 0
        setIsSSR(cartLength / 4);

    }, [cart2]);



    const handleLogOut = async () => {
        try {
            await logOut();
            router.push('/')
        }
        catch (err) {
            console.log(err);
        }
    }

    function redirectToUserPage() {
        router.push('/user')
    }

    function userInfo() {

        return (
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={redirectToUserPage} color="warning">Profil</Button>
                <Button variant="contained" onClick={handleLogOut} color="warning">Delogheaza-te</Button>
            </Stack>
        )
    }


    return (
        <div className={styles.container}>
            <div className={styles.item}>
                {user ? userInfo() : <div className={styles.profile}>
                    <Link href="/login">
                        <Image src="/img/profile.png" alt="" width="55" height="55" />
                    </Link>
                </div>}
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/">Homepage</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/meniu">Meniu</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/produse">Produse</Link>
                    </li>
                    <Image src="/img/logo.png" alt="" width="160px" height="150px" />
                    <li className={styles.listItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">Despre</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/recenzii">Recenzii</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href="/cart">
                        <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                    </Link>
                    <div className={styles.counter}>{isSSR}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar