import {Layout} from "../../components";
import Image from "next/image";
import {formatDate} from "../../helpers";
import styles from "../../styles/blog.module.css";

const PostUrl = ({post}) => {
    const {titulo, contenido, imagen, publishedAt} = post[0].attributes;

    return (
        <Layout
            title={titulo}
            description={`Guitarra ${titulo}`}
        >
            <article className={`${styles.post} ${styles['mt-5']}`}>
                <Image
                    className="animate__animated animate__fadeIn"
                    width={1000}
                    height={600}
                    src={imagen?.data.attributes.url}
                    priority
                    alt={`Imagen guitarra ${titulo}`}
                />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    );
};

export async function getServerSideProps({params: {url}}) {
    const resp = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=*`);
    const {data: post} = await resp.json();

    return {
        props: {
            post,
        }
    }
}

export default PostUrl;
