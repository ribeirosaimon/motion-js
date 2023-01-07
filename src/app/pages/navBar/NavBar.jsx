import "./NavBar.css"
import StoreContext from "../../store/Context";
import {useContext} from "react";
import {SuccessTool} from "../../components/tooltip/Toll";

export default function NavBar() {
    const {setToken} = useContext(StoreContext)

    function onClickLogout(event){
        event.preventDefault()
        SuccessTool("Bye Bye!")
        setToken()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-content">
            <div>
                <a className="navbar-brand" href="https://www.orkut.com/">
                    <img src={"http://www.orkut.com/img/orkut-logo.png"} alt={"orkut"}/>
                </a>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Scrapbook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Friends</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Communities</a>
                    </li>
                </ul>
            </div>
            <div className={"navbar-information"}>
                <a className="nav-link disabled">email@email.com</a>
            </div>
            <div className={"navbar-information logout"}>
                <a className="navbar-brand" href={"/login"} onClick={onClickLogout}>Logout</a>
            </div>
        </nav>
    )
}