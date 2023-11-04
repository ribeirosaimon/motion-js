import {useContext, useEffect, useState} from "react";
import StoreContext from "../../store/Context";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import {formatCurrency} from "../../components/util/NumberUtil";
import Loading from "../loadingPage/Loading";


export default function OrderPage() {
    const [order, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const {loggedRole} = useContext(StoreContext)

    useEffect(() => {
        HttpGetAxios("/order")
            .then(r => {
                setOrders(r.data)
                setLoading(false)
            }).catch()
    }, []);

    console.log(order)
    return (
        loading ? <Loading/> :
        <table className="table table-bordered text-center align-middle">
            <OrderHeaderTable loggedUser={loggedRole}/>
            {
                order
                    .map((c, index) => (
                            <tbody>
                            <tr key={index}>
                                <td>{c.id}</td>
                                <td>{c.summaryStockCode.toUpperCase()}</td>
                                <td>{c.status}</td>
                                <td>{formatCurrency(c.value)}</td>
                                <td>{c.quantity}</td>
                                <td>{c.createdAt}</td>
                                <td>
                                    <a href={"/user/my-watchList/sell/?company=" + c.id}>
                                        <i className="bi bi-x"/>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        )
                    )
            }
        </table>
    )
}

const OrderHeaderTable = () => {
    return (
        <thead>
        <tr>
            <th>Id</th>
            <th>Company</th>
            <th>Status</th>
            <th>Value</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Cancel</th>
        </tr>
        </thead>
    )
}