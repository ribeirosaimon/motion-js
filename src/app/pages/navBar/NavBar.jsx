// Navbar.js
import React from 'react';
import styled from 'styled-components';
import Colors from "../../components/colors/Colors";

const NavBarContainer = styled.nav`
  background-color: ${Colors.primary};
  //padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 24px; 
  cursor: pointer; 

  &:hover {
    color: ${Colors.darkBlue}; 
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${Colors.darkBlue};
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

// Estilização do email em uma caixinha com disabled
const EmailContainer = styled.div`
  background-color: ${Colors.lightBlue};
  padding: 5px 10px;
  color: #333;
  border-radius: 5px;
  margin-right: 10px;
`;

// Estilização do botão de logout
const LogoutButton = styled.button`
  background-color: ${Colors.danger};
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.darkBlue};
  }
`;

const Navbar = ({ onClickLogout }) => {
    return (
        <NavBarContainer>
            <LogoLink>
                <p>Motion</p>
            </LogoLink>

            <NavLinkContainer>
                <NavLink href="/">Home</NavLink>
                <NavLink href="#">Profile</NavLink>
            </NavLinkContainer>



            <SocialContainer>
                <EmailContainer href="mailto:email@email.com">
                    email@email.com
                </EmailContainer>
                <LogoutButton href="/login" onClick={onClickLogout}>
                    Logout
                </LogoutButton>
            </SocialContainer>

        </NavBarContainer>
    );
};

export default Navbar;