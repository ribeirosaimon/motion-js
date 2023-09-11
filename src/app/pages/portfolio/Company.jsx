import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import {addThousandsCommas, decimalToPercentage, formatCurrency} from "../../components/util/NumberUtil";


const Company = ({companyId}) => {
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
                        <td>{formatCurrency(company.stockValue.price)}</td>
                        <td>{formatCurrency(company.stockValue.rangeDay)}</td>
                        <td>{decimalToPercentage(company.stockValue.percentRange)}</td>
                        <td>{formatCurrency(company.summary.previousClose)}</td>
                        <td>{formatCurrency(company.summary.open)}</td>
                        <td>{formatCurrency(company.summary.dayRange.start)}</td>
                        <td>{formatCurrency(company.summary.dayRange.end)}</td>
                        <td>{formatCurrency(company.summary.yearRange.start)}</td>
                        <td>{formatCurrency(company.summary.yearRange.end)}</td>
                        <td>{addThousandsCommas(company.summary.volume)}</td>
                        <td>{addThousandsCommas(company.summary.avgVol)}</td>
                    </tr>
                    :
                    <tr/>
            }
        </>

    )
}

export default Company