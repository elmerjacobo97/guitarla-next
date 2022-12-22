import {Curso, Guitarra, Layout, Post} from "../components";
import styles from "../styles/grid.module.css";

export default function Home({guitarras, posts, curso}) {
    return (
        <Layout
            title="Inicio"
            description="Venta de guitarras, tienda de guitarras, blog de música"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Colección</h1>
                <div className={styles.grid}>
                    {
                        guitarras?.map((guitarra) => (
                            <Guitarra
                                key={guitarra.id}
                                guitarra={guitarra.attributes}
                            />
                        ))
                    }
                </div>
            </main>

            <Curso curso={curso.attributes} />

            <section className="contenedor">
                <h2 className="heading">Blog</h2>
                <div className={styles.grid}>
                    {
                        posts?.map(post => (
                            <Post key={post.id} post={post.attributes}/>
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=*`;
    const urlPosts = `${process.env.API_URL}/posts?populate=*`;
    const urlCurso = `${process.env.API_URL}/curso?populate=*`;

    const [resGuitarras, resPosts, resCurso] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlPosts),
        fetch(urlCurso),
    ])

    const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
        resGuitarras.json(),
        resPosts.json(),
        resCurso.json(),
    ])

    return {
        props: {
            guitarras,
            posts,
            curso,
        }
    }
}
