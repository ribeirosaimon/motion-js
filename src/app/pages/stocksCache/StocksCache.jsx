import {useEffect, useState} from "react";
import {HttpGetAxios, HttpPostAxios} from "../../utils/HttpBasicAxios";
import HeadStockCacheTable from "./HeadStockCacheTable";
import Company from "../portfolio/Company";
import Config from "../config/Config";


const StocksCache = () => {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        HttpGetAxios("/company/all?limit=10&page=0")
            .then(r => {
                setStocks(r.data)
            })
    },[])

    return(
        <>
            <Config/>
            <table className="table table-bordered">
                <HeadStockCacheTable/>
                {
                    stocks
                        .map((c, index) => (
                                <tbody>
                                <tr>
                                    <td>{c.companyName}</td>
                                    <td>{c.stockValue.percentRange}</td>
                                    <td>{c.summary.volume}</td>
                                    <td>{c.summary.avgVol}</td>
                                    <td>{c.updatedAt}</td>
                                </tr>
                                </tbody>
                            )
                        )
                }
            </table>
        </>

    )
}

export default StocksCache