import styled from "styled-components";
import Colors from "../../../components/colors/Colors";

const SocialInfo = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const NavLink = styled.a`
  width: 100%;
  color: #fff;
  display: block;
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


const NavSocial = ({user}) => {

    return (
        <div>
            <SocialInfo>
                Hello {user.name}
            </SocialInfo>
            <NavLink href="/my-portfolio">My Portfolio</NavLink>
            <NavLink href="/test">My Test</NavLink>
        </div>
    )
}

export default NavSocial