import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import {decimalToPercentage, formatCurrency} from "../../components/util/NumberUtil";


const SimpleCompany = ({companyId, ownerPrice, ownerQuantity}) => {
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
                        <td>{formatCurrency(ownerPrice * ownerQuantity)}</td>
                        <td>{ownerQuantity}</td>
                        <td>{formatCurrency(ownerPrice)}</td>
                        <td>{decimalToPercentage((company.summary.previousClose / ownerPrice) - 1)}</td>
                        <td>{formatCurrency(company.summary.previousClose)}</td>
                        <td>{formatCurrency(company.summary.open)}</td>
                        <td>{company.stockValue.percentRange}</td>
                    </tr>
                    :
                    <tr/>
            }
        </>

    )
}

export default SimpleCompany