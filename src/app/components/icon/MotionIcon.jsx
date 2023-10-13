import styled from "styled-components";
import {Colors} from "../colors/Colors";

const MotionIcon = styled.i`
  margin: 0;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: ${Colors.primary};
    color: white;
    border-radius: 5px;
  }
`;

export default MotionIcon