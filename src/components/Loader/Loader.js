const Loader = () => {
    return (
        <div className="vh-70 d-flex justify-content-center align-items-center">
            <h1 className="mt-5 text-center"></h1>
            <div className="text-center">
                <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden text-center">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader;