import styles from "../styles/footer.module.css";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navigation}>
                    <Link
                        href="/"
                    >Inicio</Link>
                    <Link
                        href="/nosotros"
                    >Nosotros</Link>
                    <Link
                        href="/tienda"
                    >Tienda</Link>
                    <Link
                        href="/blog"
                    >Blog</Link>
                </nav>
                <p className={styles.copyright}>
                    Todos los derechos reservados &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};
