import React from "react";
import "./LoginHome.css"

function LoginHome() {
    return (
        <div className="login-home">
            <div className={"info-login-content"}>
                <div className={"logo-image"}>
                    <a className="navbar-brand" href="https://www.orkut.com/">
                        <img src={"http://www.orkut.com/img/orkut-logo.png"} alt={"orkut"}/>
                    </a>
                </div>
                <div>
                    <p><strong>Connect</strong> with friends and family using scraps and instant messaging</p>
                    <p><strong>Discover</strong> new people through friends of friends and communities</p>
                    <p><strong>Share</strong> your videos, pictures, and passions all in one place</p>
                </div>
            </div>
        </div>
    );
}

export default LoginHome;
