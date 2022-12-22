import {Layout, Guitarra} from "../components";
import styles from "../styles/grid.module.css";

const Tienda = ({guitarras}) => {
    return (
        <Layout
            title="Tienda Virtual"
            description="Tienda virtual, venta de guitarras"
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
        </Layout>
    );
};

// export async function getStaticProps(context) {
//     const resp =  await fetch(`${process.env.API_URL}/guitarras?populate=*`);
//     const {data: guitarras} = await resp.json();
//
//     return {
//         props: {
//             guitarras,
//         },
//     }
// }

export async function getServerSideProps(context) {
    const resp =  await fetch(`${process.env.API_URL}/guitarras?populate=*`);
    const {data: guitarras} = await resp.json();

    return {
        props: {
            guitarras,
        },
    }
}

export default Tienda;
