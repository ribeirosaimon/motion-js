import {HeadCompleteTable} from "./HeadCompleteTable";
import Company from "./Company";


const CompleteResponseTable = ({myPortfolio}) => {
    return (
        <table className="table table-bordered">
            <HeadCompleteTable/>
            <tbody>
            {
                myPortfolio
                    .companies
                    .map((c, index) => (
                            <Company key={index} companyId={c.stockId}/>
                        )
                    )
            }
            </tbody>
        </table>
    )
}

export default CompleteResponseTable