import Link from "next/link";

const Page404 = () => {
    return (
        <div className="error">
            <p>Página no Encontrada</p>
            <Link href="/" className="error-enlace">
                Ir al Inicio
            </Link>
        </div>
    );
};

export default Page404;
