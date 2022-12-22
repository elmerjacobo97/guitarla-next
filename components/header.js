import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import {useRouter} from "next/router";

export const Header = () => {
    const {pathname} = useRouter();

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href="/">
                    <Image
                        src="/img/logo.svg"
                        width={300}
                        height={40}
                        alt="Imagen logo"
                        priority
                    />
                </Link>
                <nav className={styles.navigation}>
                    <Link
                        href="/"
                        className={pathname === '/' ? styles.active : null}
                    >Inicio</Link>
                    <Link
                        href="/nosotros"
                        className={pathname === '/nosotros' ? styles.active : null}
                    >Nosotros</Link>
                    <Link
                        href="/tienda"
                        className={pathname === '/tienda' ? styles.active : null}
                    >Tienda</Link>
                    <Link
                        href="/blog"
                        className={pathname === '/blog' ? styles.active : null}
                    >Blog</Link>
                    <Link href="/carrito">
                        <Image
                            width={30}
                            height={25}
                            src="/img/carrito.png"
                            alt="Imagen carrito"
                        />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

