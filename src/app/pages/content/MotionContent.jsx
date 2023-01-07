import "./MotionContent.css"
import NavSocial from "../navBar/NavSocial";
import React from "react";
import SocialContent from "../social/SocialPage";
export default function MotionContent({infoContent, nav, social}) {
    return (
        <main>
            <div className={"nav-content"}>
                <NavSocial/>
            </div>
            <div className={"info-content"}>
                {infoContent}
            </div>
            <div className={"social-content"}>
                <SocialContent/>
            </div>
        </main>
    )
}