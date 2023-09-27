const Header = () => {

    const id = "app-header"
    const edad = 19

    return (
        <header id={id} className="header">
            <h1>CRO pro</h1>
            <input id="buscador" placeholder="Buscar"></input>
            <nav className="navbar">
                <a href="#">inicio</a>
                <a href="#">nosotros</a>
                <a href="#">productos</a>
            </nav>
        </header>

    )



}

export default Header