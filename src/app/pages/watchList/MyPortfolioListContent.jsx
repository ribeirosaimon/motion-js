import styled from "styled-components";
import Loading from "../loadingPage/Loading";
import CompleteResponseTable from "./CompleteResponseTable";
import EasyResponseTable from "./EasyResponseTable";


const PortfolioContainerContent = styled.div`

`;

const TableResponse = ({easyContent, myPortfolio}) => {
    return(
        easyContent ? <CompleteResponseTable myPortfolio={myPortfolio}/>
            :
            <EasyResponseTable myPortfolio={myPortfolio}/>
    )
}

const MyPortfolioListContent = ({easyContent, myPortfolio, loading}) => {
    return (
        <PortfolioContainerContent>
            {
                loading ?
                    <Loading/> : <TableResponse easyContent={easyContent} myPortfolio={myPortfolio}/>

            }
        </PortfolioContainerContent>
    )
}

export default MyPortfolioListContent