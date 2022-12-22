import {useState} from "react";
import Image from "next/image";
import {Layout} from "../../components";
import styles from "../../styles/guitarras.module.css";

const Producto = ({guitarra, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(0);
    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('Cantidad no válida');
            return
        }

        // Construir un objeto
        const guitarraSelect = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        }

        // Pasando la info al context
        agregarCarrito(guitarraSelect);
    }

    return (
        <Layout
            title={`Guitarra ${nombre}`}
            description={`Descripción del producto ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image
                    className="animate__animated animate__fadeIn"
                    width={600}
                    height={400}
                    src={imagen.data.attributes.url}
                    priority
                    alt={`Imagen guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.description}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    {/* Carrito de compras */}
                    <form
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="cantidad">Cantidad</label>
                        <select
                            id="cantidad"
                            onChange={(event) => setCantidad(+event.target.value)}
                        >
                            <option value="0">--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <input
                            type="submit"
                            value="Agregar al carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const resp = await fetch(`${process.env.API_URL}/guitarras`);
    const {data} = await resp.json();
    const paths = data?.map(guitarra => ({
        params: {
            url: guitarra.attributes.url,
        }
    }))
    // console.log(paths);

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params: {url}}) {
    const resp = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`);
    const {data: guitarra} = await resp.json();

    return {
        props: {
            guitarra,
        }
    }
}

// export async function getServerSideProps({params: {url}}) {
//     const resp = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`);
//     const {data: guitarra} = await resp.json();
//
//     return {
//         props: {
//             guitarra,
//         }
//     }
// }

export default Producto;
