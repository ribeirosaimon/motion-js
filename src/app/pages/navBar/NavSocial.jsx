export default function NavSocial() {
    return (
        <div>
            <div>
                <img src={"https://thispersondoesnotexist.com/image"}/>
            </div>
            <div>
                Informations
            </div>
            <div>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Edit Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Scrapbook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Album</a>
                        </li>

                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    )

}