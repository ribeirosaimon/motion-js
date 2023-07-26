import styled from "styled-components";
import Colors from "../../components/colors/Colors";
import Loading from "../loadingPage/Loading";
import HeadTable from "./HeadTable";
import Company from "./Company";


const PortfolioContainerContent = styled.div`

`;

const PortfolioContent = ({myportfolio, loading}) => {
    return (
        <PortfolioContainerContent>
            {
                loading ?
                    <Loading/> :
                    <table  className="table table-bordered">
                        <HeadTable/>
                        <tbody>
                        {
                            myportfolio
                                .companies
                                .map((c, index) => (
                                        <Company key={index} companyId={c}/>
                                    )
                                )
                        }
                        </tbody>
                    </table>
            }
        </PortfolioContainerContent>
    )
}

export default PortfolioContent