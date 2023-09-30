import Modelos from "./figurin-mujer-hombre.png";

const ErrorPage = () => {
    return (
        <>
            <h3 className="pt-3 text-center brittany">Página no encontrada</h3>
            <div className="text-center seccion d-flex flex-column justify-content-center align-items-center">
                <img src={`${Modelos}`} alt="" width={"300px"}/>
            </div>
        </>
    )
}

export default ErrorPage;