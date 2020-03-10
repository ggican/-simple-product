import React from "react";

import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io";
import StyleSocialButton from "./index.style";

const SocialButton = ({ social, onLogin = () => {}, title = "" }) => {
    return (
        <StyleSocialButton social={social}>
            <div className="social-button">
                <button type="button" onClick={onLogin}>
                    <div className="social-button--icon">
                        {social === "google" ? (
                            <IoLogoGoogle size={20}></IoLogoGoogle>
                        ) : (
                            <IoLogoFacebook size={22}></IoLogoFacebook>
                        )}
                    </div>
                    <span>{title}</span>
                </button>
            </div>
        </StyleSocialButton>
    );
};

export default SocialButton;
