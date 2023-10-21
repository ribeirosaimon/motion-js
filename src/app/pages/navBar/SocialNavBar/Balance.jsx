import styled from "styled-components";
import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../../utils/HttpBasicAxios";
import {formatCurrency} from "../../../components/util/NumberUtil";

const BalanceInfo = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;


const Balance = () => {
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        HttpGetAxios("/transaction/balance")
            .then(r => {
                setBalance(r.data.value)
            })
    },[])

    return(
        <BalanceInfo>
            {formatCurrency(balance)}
        </BalanceInfo>
    )
}

export default Balance