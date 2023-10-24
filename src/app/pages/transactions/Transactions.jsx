import {useContext, useEffect, useState} from "react";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import {formatCurrency} from "../../components/util/NumberUtil";
import StoreContext from "../../store/Context";

const Transactions = () => {
    const [transaction, setTransaction] = useState([])
    const { loggedRole} = useContext(StoreContext)

    useEffect(() => {
        HttpGetAxios("/transaction")
            .then(r => {
                setTransaction(r.data)
        }).catch()
    }, []);

    return(
        <table className="table table-bordered">
            <TransactionsHeaderTable loggedUser={loggedRole}/>
            {
                transaction
                    .map((c, index) => (
                            <tbody>
                            <tr key={index}>
                                <td>{c.operationType}</td>
                                <td>{formatCurrency(c.value)}</td>
                                <td>{c.createdAt}</td>
                            </tr>
                            </tbody>
                        )
                    )
            }
        </table>
    )

}

const TransactionsHeaderTable = () => {
    return (
        <thead>
        <tr>
            <th>Operation</th>
            <th>Value</th>
            <th>Date</th>
        </tr>
        </thead>
    )
}

export default Transactions