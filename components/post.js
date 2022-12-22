import Image from "next/image";
import Link from "next/link";
import {formatDate} from "../helpers";
import styles from "../styles/blog.module.css";

export const Post = ({post}) => {
    const {contenido, imagen, titulo, url, publishedAt} = post;

    return (
        <article>
            <Image
                className="animate__animated animate__fadeIn"
                width={600}
                height={400}
                src={imagen.data.attributes.formats.medium.url}
                priority
                alt={`Imagen guitarra ${titulo}`}
            />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} className={styles.enlace}>
                    Leer Post
                </Link>
            </div>
        </article>
    );
};
