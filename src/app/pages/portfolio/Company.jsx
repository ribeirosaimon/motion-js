import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";


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
                        <td>{company.companyCode}</td>
                        <td>{company.stockValue.price}</td>
                        <td>{company.stockValue.rangeDay}</td>
                        <td>{company.stockValue.percentRange}</td>
                        <td>{company.summary.previousClose}</td>
                        <td>{company.summary.open}</td>
                        <td>{company.summary.dayRange.start}</td>
                        <td>{company.summary.dayRange.end}</td>
                        <td>{company.summary.yearRange.start}</td>
                        <td>{company.summary.yearRange.end}</td>
                        <td>{company.summary.volume}</td>
                        <td>{company.summary.avgVol}</td>
                    </tr>
                    :
                    <tr/>
            }
        </>

    )
}

export default Company