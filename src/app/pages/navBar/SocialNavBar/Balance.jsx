import styled from "styled-components";
import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../../utils/HttpBasicAxios";
import {formatCurrency} from "../../../components/util/NumberUtil";
import Loading from "../../loadingPage/Loading";

const BalanceInfo = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const BoxValue = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const BoxInfo = styled.div`
  width: 50%;
`;


const Balance = () => {
    const [balance, setBalance] = useState(0)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        HttpGetAxios("/transaction/balance")
            .then(r => {
                setBalance(r.data.value)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
            loading ?
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only"></span>
                </div>
                :
                <BalanceInfo>
                    <BoxValue>
                        <BoxInfo>
                            Cash:
                        </BoxInfo>
                        <BoxInfo>
                            {formatCurrency(balance)}
                        </BoxInfo>
                    </BoxValue>
                    <BoxValue>
                        <BoxInfo>
                            Stocks:
                        </BoxInfo>
                        <BoxInfo>
                            {formatCurrency(balance)}
                        </BoxInfo>
                    </BoxValue>
                    <BoxValue>
                        <BoxInfo>
                            Total:
                        </BoxInfo>
                        <BoxInfo>
                            {formatCurrency(balance)}
                        </BoxInfo>
                    </BoxValue>
                </BalanceInfo>
            }

        </>

    )
}

export default Balance