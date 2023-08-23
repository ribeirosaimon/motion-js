import MotionIcon from "../../components/icon/MotionIcon";
import styled from "styled-components";
import {useEffect, useState} from "react";
import MotionWrapper from "../../components/wrapper/MotionWrapper";
import {HttpGetAxios, HttpPostAxios} from "../../utils/HttpBasicAxios";
import Loading from "../loadingPage/Loading";
import {ErrorTool, SuccessTool} from "../../components/tooltip/Toll";
import WillBuyContent from "./WillBuyContent";

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

const SearchBar = ({saveCompany, setSaveCompany}) => {
    const [search, setSearch] = useState("")
    const [motionWrapper, setMotionWrapper] = useState(false)
    const [willBuy, setWillBuy] = useState(true)
    const [loading, setLoading] = useState(true)
    const [foundCompany, setFoundCompany] = useState({})

    const addCompany = () => {
        setMotionWrapper(true)
        setLoading(true)
        HttpGetAxios("/company/code/" + search)
            .then(r => {
                setFoundCompany(r.data)
                setLoading(false)
            })
    }

    const saveCompanyInPortfolio = () => {

        HttpPostAxios("/portfolio/company/" + foundCompany.id)
            .then(r => {
                SuccessTool("Company was saved!")
                setSaveCompany(true)
                setLoading(true)
                setMotionWrapper(false)
                setFoundCompany({})
            })
            .catch(() => {
                setMotionWrapper(false)
                setFoundCompany({})
                ErrorTool("Something are wrong!")
            })
    }

    const CompanyInformation = () => {
        const [willBuy, setWillBuy] = useState(false)

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
                    <MotionIcon className="bi bi-check2-circle" onClick={() => setWillBuy(!willBuy)}/>
                    {
                        willBuy &&
                        <WillBuyContent />
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