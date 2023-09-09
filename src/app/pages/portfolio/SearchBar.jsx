import MotionIcon from "../../components/icon/MotionIcon";
import styled from "styled-components";
import {useEffect, useState} from "react";
import MotionWrapper from "../../components/wrapper/MotionWrapper";
import {HttpGetAxios, HttpPostAxios} from "../../utils/HttpBasicAxios";
import Loading from "../loadingPage/Loading";
import WillBuyContent from "./WillBuyContent";
import {DangerTool, ErrorTool, SuccessTool} from "../../components/tooltip/Toll";
import Colors from "../../components/colors/Colors";

const CompanySearchBar = styled.div`
  cursor: default;
  display: flex;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SaveIcon = styled.div`
  margin-left: 10px;
  font-size: 25px;
  border-radius: 10px;
  color: ${props => props.disabled ? 'rgba(128, 128, 128, 0.3)' : 'black'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const EasyReadIcon = styled.div`
  margin-left: 10px;
  font-size: 25px;
  border-radius: 10px;
  color: ${props => (props.disabled ? "rgba(128, 128, 128, 0.3)" : "black")};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};

  /* Estilos condicionais com base em isClicked */
  background-color: ${props => (props.isClicked ? Colors.primary : "transparent")};
  color: ${props => (props.isClicked ? "white" : "black")};
`;

const CompanyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 70vh;
  width: 50%;
  background-color: white;
  border-radius: 20px;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
`;


const StockValues = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TableStock = styled.table`
  width: 100%;
`;

const StockClose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StockCloseValue = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 30px;
  margin: 10px
`;



const SearchBar = ({easyContent, setEasyContent, setSaveCompany}) => {
    const [search, setSearch] = useState("")
    const [motionWrapper, setMotionWrapper] = useState(false)
    const [willBuy, setWillBuy] = useState(false)
    const [loading, setLoading] = useState(true)
    const [foundCompany, setFoundCompany] = useState({})
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0.0)

    const handleClick = () => {
        setEasyContent(!easyContent);
    };

    useEffect(() => {
        setWillBuy(false)
        setQuantity(0)
        setPrice(0)
    },[motionWrapper])

    const addCompany = () => {
        setMotionWrapper(true)
        setLoading(true)
        HttpGetAxios("/company/code/" + search)
            .then(r => {
                setFoundCompany(r.data)
                setLoading(false)
            })
    }

    const changeToEasyRead = () => {

    }
    const saveCompanyInPortfolio = () => {
        if (willBuy === false) {
            setWillBuy(true)
        } else {
            if (quantity === 0) {
                DangerTool("I need a quantity")
                return
            }
            if (price === 0) {
                DangerTool("I need a price")
                return
            }
            setMotionWrapper(false)
            // Converter para números de ponto flutuante
            let priceAsFloat = parseFloat(price);
            let quantityAsInt = parseInt(quantity);

            let body = {
                price: priceAsFloat,
                quantity: quantityAsInt
            };

            HttpPostAxios("/portfolio/company/" + foundCompany.id, body)
                .then(r => {
                    SuccessTool("Company was saved!")
                    setSaveCompany(true)
                    setLoading(true)
                    setMotionWrapper(false)
                    setFoundCompany({})
                })
                .catch(r => {
                    setMotionWrapper(false)
                    setFoundCompany({})
                    ErrorTool(r.response.data.message)
                })
        }

    }


    const CompanyInformation = () => {
        return (
            <CompanyInfoContent>
                {
                    loading ?
                        <Loading/> :
                        motionWrapper &&
                        <>
                            <div>
                                <p><strong> Company: </strong>
                                    {foundCompany.companyName}  </p>

                                <p><strong> Company Code: </strong>
                                    {foundCompany.companyCode.toUpperCase()} </p>

                            </div>
                            <div>
                                <StockClose>
                                    <div>
                                        <p><strong> Summary stock informations: </strong></p>
                                    </div>

                                    <StockCloseValue>
                                        {foundCompany.summary.previousClose}
                                    </StockCloseValue>
                                </StockClose>

                            </div>

                            <div className={"text-center"}>

                                <div>
                                    <StockValues>
                                        <TableStock className={"table table-bordered "}>
                                            <thead>
                                            <tr>
                                                <th>Range</th>
                                                <th>Start</th>
                                                <th>End</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Day</td>
                                                <td>{foundCompany.summary.dayRange.start}</td>
                                                <td>{foundCompany.summary.dayRange.end}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{foundCompany.summary.yearRange.start}</td>
                                                <td>{foundCompany.summary.yearRange.end}</td>
                                            </tr>
                                            </tbody>
                                        </TableStock>
                                    </StockValues>
                                    <StockValues>
                                        <TableStock className={"table table-bordered"}>
                                            <thead>
                                            <tr>
                                                <th>Volume</th>
                                                <th>Avg Vol</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>{foundCompany.summary.volume}</td>
                                                <td>{foundCompany.summary.avgVol}</td>
                                            </tr>
                                            </tbody>
                                        </TableStock>
                                    </StockValues>
                                </div>
                            </div>
                        </>
                }

                <CloseIcon>
                    <MotionIcon className="bi bi-check2-circle" onClick={saveCompanyInPortfolio}/>
                    {
                        willBuy &&
                        <WillBuyContent quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice}/>
                    }
                    <MotionIcon className="bi bi-x-lg" onClick={() => setMotionWrapper(!motionWrapper)}/>
                </CloseIcon>
            </CompanyInfoContent>
        )
    }

    return (
        <>
            <CompanySearchBar>
                <input
                    type="text"
                    placeholder="Company Code:"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}

                />
                <SaveIcon disabled={search === ""}>
                    <MotionIcon className="bi bi-building-add" onClick={addCompany}/>
                </SaveIcon>
                <EasyReadIcon isClicked={easyContent} onClick={handleClick}>
                    <MotionIcon className="bi bi-currency-exchange" onClick={changeToEasyRead}/>
                </EasyReadIcon>
                {
                    motionWrapper &&
                    <MotionWrapper>
                        <CompanyInformation
                            motionWrapper={motionWrapper}
                            setMotionWrapper={setMotionWrapper}
                            loading={loading}/>
                    </MotionWrapper>
                }
            </CompanySearchBar>
        </>
    );
}

export default SearchBar;