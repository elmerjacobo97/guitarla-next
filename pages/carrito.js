import {useEffect, useState} from "react";
import Image from "next/image";
import {Layout} from "../components";
import styles from "../styles/carrito.module.css";

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, product) => total + (product.cantidad * product.precio), 0);
        setTotal(calculoTotal);
    }, [carrito])

    return (
        <Layout
            title="Carrito de compras"
        >
            <main className="contenedor">
                <h1 className="heading">Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos</h2>
                        {
                            carrito?.length === 0
                                ? <p>Carrito vacío</p>
                                : (
                                    carrito?.map(producto => (
                                        <div
                                            key={producto.id}
                                            className={styles.producto}
                                        >
                                            <div>
                                                <Image
                                                    width={250}
                                                    height={480}
                                                    src={producto.imagen}
                                                    priority
                                                    alt={producto.nombre}
                                                />
                                            </div>
                                            <div>
                                                <p className={styles.nombre}>
                                                    {producto.nombre}
                                                </p>

                                                <p>Cantidad:</p>
                                                <select
                                                    value={producto.cantidad}
                                                    className={styles.select}
                                                    onChange={(event) => actualizarCantidad({
                                                        cantidad: +event.target.value,
                                                        id: producto.id,
                                                    })}
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>

                                                <p className={styles.precio}>
                                                    $<span>{producto.precio}</span>
                                                </p>
                                                <p className={styles.subtotal}>
                                                    Subtotal: $<span>{producto.cantidad * producto.precio}</span>
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className={styles.btn_eliminar}
                                                onClick={() => eliminarProducto(producto.id)}
                                            >X</button>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a Pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    );
};

export default Carrito;
