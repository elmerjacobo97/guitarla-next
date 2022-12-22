import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export const Guitarra = ({guitarra}) => {
    const {descripcion, imagen, nombre, precio, url} = guitarra;

    return (
        <div className={styles.guitarra}>
            <Image
                className="animate__animated animate__fadeIn"
                width={600}
                height={400}
                src={imagen.data.attributes.formats.medium.url}
                priority
                alt={`Imagen guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.description}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`} className={styles.enlace}>
                    Ver Producto
                </Link>
            </div>
        </div>
    );
};
