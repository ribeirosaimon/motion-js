import styled from "styled-components";


const MotionWrapperContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const MotionWrapper = ({children}) => {
    return (
        <MotionWrapperContent>
            <InfoContent>
                {children}
            </InfoContent>
        </MotionWrapperContent>
    )
}

export default MotionWrapper