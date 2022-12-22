import {Layout} from "../components";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
    return (
        <Layout
            title="Nosotros"
            description="Sobre Nosotros, tienda de música"
        >
            <main className="nosotros">
                <h1 className="heading">Nosotros</h1>
                <div className={styles.contenido}>
                    <Image
                        className="animate__animated animate__fadeIn"
                        width={1000}
                        height={800}
                        src="/img/nosotros.jpg"
                        alt="Imagen sobre nosotros"
                    />

                    <div>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt
                            nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec,
                            egestas non nisi.
                        </p>
                        <p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt
                            nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec,
                            egestas non nisi.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Nosotros;
