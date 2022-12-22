import {useState, useEffect} from "react";
import {Roboto} from '@next/font/google';
import '../styles/globals.css';
import 'animate.css';

const roboto = Roboto({
    weight: ['300', '400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [];
    const [carrito, setCarrito] = useState(carritoLS);
    const [pageLista, setPageLista] = useState(false);

    useEffect(() => {
        setPageLista(true);
    }, [])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    const agregarCarrito = guitarra => {
        // Comprobar si la guitarra ya esta en el carrito...
        if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
            // Iterar para actualizar la cantidad
            const carritoActualizado = carrito.map( guitarraState => {
                if( guitarraState.id === guitarra.id ) {
                    guitarraState.cantidad = guitarra.cantidad;
                }
                return guitarraState;
            });
            // Se asigna al array
            setCarrito([...carritoActualizado]);
            localStorage.setItem('carrito', JSON.stringify( carrito ));
        } else {
            // En caso de que el artículo no exista, es nuevo y se agrega
            setCarrito([...carrito, guitarra]);
            localStorage.setItem('carrito', JSON.stringify( carrito ));
        }
    }

    const eliminarProducto = id => {
        const carritoActualizado = carrito.filter( producto => producto.id !== id)
        setCarrito(carritoActualizado)
        window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = parseInt( guitarra.cantidad )
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
        window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    return (
        <div className={roboto.className}>
            {pageLista && (
                <Component
                    {...pageProps}
                    carrito={carrito}
                    agregarCarrito={agregarCarrito}
                    eliminarProducto={eliminarProducto}
                    actualizarCantidad={actualizarCantidad}
                />
            )}
        </div>
    )
}
