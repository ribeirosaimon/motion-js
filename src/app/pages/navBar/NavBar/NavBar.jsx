import React from 'react';
import styled from 'styled-components';
import {Colors, getColors} from "../../../components/colors/Colors";
import IconConfigure from "./IconConfigure";

const NavBarContainer = styled.nav`
  background-color: ${props => props.backgroundColor.primary};
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
    background-color: ${props => props.backgroundColor.hold};
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
    background-color: ${Colors.hold};
  }
`;

const Navbar = ({onClickLogout, user, toValidateEmail, colors}) => {


    return (
        <NavBarContainer backgroundColor={colors}>
            <LogoLink>
                <Paragraph>Motion</Paragraph>
            </LogoLink>
            <>
                {
                    !toValidateEmail &&
                    <NavLinkContainer>
                        <NavLink href="/" backgroundColor={colors}>Home</NavLink>
                        <NavLink href="/profile" backgroundColor={colors}>Profile</NavLink>
                    </NavLinkContainer>
                }
            </>


            <SocialContainer>
                {
                    !toValidateEmail &&
                    <IconConfigure user={user}/>
                }

                <LogoutButton href="/login" onClick={onClickLogout}>
                    Logout
                </LogoutButton>
            </SocialContainer>

        </NavBarContainer>
    );
};

export default Navbar;