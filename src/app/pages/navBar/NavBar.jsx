import React from 'react';
import styled from 'styled-components';
import Colors from "../../components/colors/Colors";

const NavBarContainer = styled.nav`
  background-color: ${Colors.primary};
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  color: #fff;
  font-weight: bold;
  font-size: 20px; 
  width: 10%;
  cursor: pointer;
  border-right: 2px solid #fff;
  box-sizing: border-box;
`;

const Paragraph = styled.p`
  margin: 0; /* Remover margens padrão do parágrafo */
  display: flex;
  align-items: center;
`;

const NavLinkContainer = styled.div`
  display: flex;
  width: 100%;
`;

const NavLink = styled.a`
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.darkBlue};
    color: white;
    border-radius: 5px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EmailContainer = styled.div`
  background-color: ${Colors.lightBlue};
  border-radius: 5px;

`;

const LogoutButton = styled.button`
  background-color: ${Colors.danger};
  color: #fff;
  border: none;
  height: 100%;
  padding: 5px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.darkBlue};
  }
`;

const Navbar = ({ onClickLogout, user }) => {
    return (
        <NavBarContainer>
            <LogoLink>
                <Paragraph>Motion</Paragraph>
            </LogoLink>

            <NavLinkContainer>
                <NavLink href="/">Home</NavLink>
                <NavLink href="#">Profile</NavLink>
            </NavLinkContainer>



            <SocialContainer>
                <EmailContainer href="mailto:email@email.com">
                    {user.name}
                </EmailContainer>
                <LogoutButton href="/login" onClick={onClickLogout}>
                    Logout
                </LogoutButton>
            </SocialContainer>

        </NavBarContainer>
    );
};

export default Navbar;