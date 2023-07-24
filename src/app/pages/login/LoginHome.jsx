import React from "react";
import styled from "styled-components";

const LoginHomeContainer = styled.div`
  width: 50%;
  height: 90vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const InfoDiv = styled.div`
  margin-top: 10%;
`;

const LoginHome = () =>{
    return (
        <LoginHomeContainer>
                <div className={"logo-image"}>
                    <p>Poor</p>
                    <h1><strong>BLOOMBERG</strong></h1>
                </div>
                <InfoDiv>
                    <p><strong>New App</strong> to show your investments</p>
                </InfoDiv>
        </LoginHomeContainer>

    );
}

export default LoginHome;
