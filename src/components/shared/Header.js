import logo from "../../Media/img/logo.svg"

export default function Header () {
    return (
        <div>
            <div>
                <img src={logo}></img>
                <a href="/">Metas App</a>
            </div>
            <nav className="flex">
                <a href="/perfil">Perfil</a>
            </nav>
        </div>
    )
}