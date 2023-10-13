import {HeadSimpleTable} from "./HeadCompleteTable";
import Company from "./Company";
import SimpleCompany from "./SimpleCompany";


const EasyResponseTable = ({myPortfolio}) => {
    return (
        <table className="table table-bordered">
            <HeadSimpleTable/>
            <tbody className="text-center align-middle">
            {
                myPortfolio
                    .companies
                    .map((c, index) => (
                            <SimpleCompany key={index} companyId={c}/>
                        )
                    )
            }
            </tbody>
        </table>
    )
}

export default EasyResponseTable