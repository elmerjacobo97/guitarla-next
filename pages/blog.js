import {Layout, Post} from "../components";
import styles from "../styles/grid.module.css";

const Blog = ({posts}) => {
    return (
        <Layout
            title="Blog"
            description="Blog de música, consejos"
        >
            <main className="contenedor">
                <h1 className="heading">Blog</h1>
                <div className={styles.grid}>
                    {
                        posts?.map(post => (
                            <Post key={post.id} post={post.attributes}/>
                        ))
                    }
                </div>
            </main>
        </Layout>
    );
};



export async function getStaticProps(context) {
    const resp =  await fetch(`${process.env.API_URL}/posts?populate=*`);
    const {data: posts} = await resp.json();

    return {
        props: {
            posts,
        },
    }
}

export default Blog;
