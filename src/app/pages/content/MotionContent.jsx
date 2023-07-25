import React from "react";
import NavSocialApp from "../navBar/SocialNavBar/NavSocialApp";
import styled from "styled-components";
import colors from "../../components/colors/Colors";

const MainMotion = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

const NavSocialDiv = styled.div`
  background-color: ${colors.primary};
  padding: 20px;
  margin: 20px;
  height: 50%;
  width: 15%;
  border-radius: 30px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(46, 60, 91, 0.8);
`;

const InfoContent = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const MotionContent = ({infoContent}) => {
    return (
        <MainMotion>
            <NavSocialDiv>
                <NavSocialApp/>
            </NavSocialDiv>
            <InfoContent>
                {infoContent}
            </InfoContent>
        </MainMotion>
    )
}

export default MotionContent