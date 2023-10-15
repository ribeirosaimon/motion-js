import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {Colors, getColors} from "../../../components/colors/Colors";
import StoreContext from "../../../store/Context";

const IconConfigDiv = styled.div`
  color: #fff;
  border: none;
  height: 100%;
  padding: 5px 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.backgroundColor.hold};
  }
`;

const BoxConfig = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 8px;
  background-color: ${props => props.backgroundColor.primary};
`;

const LinkRole = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;

  &:hover {
    background-color: ${props => props.backgroundColor.hold};
  }
`;

const SelectedLinkRole = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: ${props => props.backgroundColor.hold};
`;

const IconConfig = ({user}) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const {loggedRole, setLoggedRole} = useContext(StoreContext)
    const toggleOptions = () => {
        setIsOptionsOpen(prevState => !prevState);
    };
    const colors = getColors(loggedRole);

    return (
        <IconConfigDiv onClick={toggleOptions} backgroundColor={colors}>
            <div>
                <i className="bi bi-gear"></i>
            </div>

            {isOptionsOpen && (
                <BoxConfig backgroundColor={colors}>
                    {user.roles.map((role, index) => (
                        loggedRole === role.name ?
                            <SelectedLinkRole  key={index} backgroundColor={colors}>
                                <a onClick={() => setLoggedRole(role.name)}>
                                    {role.name}
                                </a>
                            </SelectedLinkRole>
                            :
                            <LinkRole key={index} backgroundColor={colors}>
                                <a onClick={() => setLoggedRole(role.name)}>
                                    {role.name}
                                </a>
                            </LinkRole>
                    ))}
                </BoxConfig>
            )}
        </IconConfigDiv>
    );
};

export default IconConfig;