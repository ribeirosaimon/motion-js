import styled from "styled-components";
import Colors from "../../components/colors/Colors";
import Loading from "../loadingPage/Loading";


const PortfolioContainerContent = styled.div`
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary};
    color: white;
    border-radius: 5px;
  }
`;

const PortfolioContent = ({myportfolio, loading}) => {
    console.log(loading)
    return (
        <PortfolioContainerContent>
            {
                loading ?
                    <Loading/> :
                    myportfolio
                        .companies
                        .map((companie, index) => (
                                <div key={index}>
                                    {companie}
                                </div>
                            )
                        )}
        </PortfolioContainerContent>
    )
}

export default PortfolioContent