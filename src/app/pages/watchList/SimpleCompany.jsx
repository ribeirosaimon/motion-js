import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import {decimalToPercentage, formatCurrency} from "../../components/util/NumberUtil";


const SimpleCompany = ({companyId}) => {
    const [company, setCompany] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        HttpGetAxios("/company/" + companyId)
            .then(r => {
                setCompany(r.data)
                setLoading(false)
            })
    }, [companyId])

    return (
        <>
            {
                !loading ?
                    <tr title={company.companyName} key={company.id}>
                        <td>{company.companyCode.toUpperCase()}</td>
                        <td>{formatCurrency(company.summary.previousClose)}</td>
                        <td>{formatCurrency(company.summary.open)}</td>
                        <td>{decimalToPercentage(company.stockValue.percentRange)}</td>
                        <td>
                            <a href={"/user/my-watchList/buy/?company=" + company.id}>
                                <i className="bi bi-check"/>
                            </a>
                            <a href={"/user/my-watchList/sell/?company=" + company.id}>
                                <i className="bi bi-x"/>
                            </a>
                        </td>
                    </tr>
                    :
                    <tr/>
            }
        </>

    )
}

export default SimpleCompany