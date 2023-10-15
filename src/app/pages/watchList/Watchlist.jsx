import styled from "styled-components";
import MyPortfolioListContent from "./MyPortfolioListContent";
import Loading from "../loadingPage/Loading";
import {useEffect, useState} from "react";
import {HttpGetAxios, HttpPostAxios} from "../../utils/HttpBasicAxios";
import {DangerTool, ErrorTool, SuccessTool} from "../../components/tooltip/Toll";
import MotionIcon from "../../components/icon/MotionIcon";
import SearchBar from "./SearchBar";


const MainContent = styled.div`
  width: 100%;
`;

const InfoMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const DivNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: gray;
  font-size: 25px;
`;


const Watchlist = () => {

    const [loading, setLoading] = useState(true)
    const [myPortfolio, setMyPortfolio] = useState({});
    const [saveCompany, setSaveCompany] = useState(false)
    const [easyContent, setEasyContent] = useState(false)

    useEffect(() => {
        addCompany()
    },[saveCompany])

    const addCompany = () => {
        HttpGetAxios("/watchlist")
            .then(r => {
                setMyPortfolio(r.data)
                setLoading(false)
            })
            .catch(() => {
                    DangerTool("You not have watchList")
                    setMyPortfolio(null)
                    setLoading(false)
                }
            )
    }
    const createWatchList = (event) => {
        event.preventDefault()
        HttpPostAxios("watchlist")
            .then(() => {
                HttpGetAxios("/watchlist")
                    .then(r => {
                        setMyPortfolio(r.data)
                    })
                    .catch(() => {
                            DangerTool("You not have watchList")
                            setMyPortfolio(null)
                            setLoading(false)
                        }
                    )
                SuccessTool("Watch list successful created")
            })
            .catch(() => {
                ErrorTool("something is wrong!")
            })

    }

    const deletePortfolio = (event) => {
        event.preventDefault()

        SuccessTool("Portfolio successful deleted")
    }

    return (
        <MainContent>
            <InfoMenu>
                <div>
                    Portfólio:
                </div>
                <div>
                    <MotionIcon title={"Add watchList"} className="bi bi-newspaper" style={{"padding": "10px"}}
                                onClick={createWatchList}/>

                    <MotionIcon title={"Exclude watchList"} className="bi bi-calendar2-x" style={{"padding": "10px"}}
                                onClick={deletePortfolio}/>
                </div>
            </InfoMenu>
            <SearchBar saveCompany={saveCompany} setSaveCompany={setSaveCompany} easyContent={easyContent} setEasyContent={setEasyContent}/>

            {
                myPortfolio === null ?
                    <DivNotFound>Not found portfolio</DivNotFound>
                    :
                    <>
                        {
                            !loading
                                ?
                                <MyPortfolioListContent myPortfolio={myPortfolio} loading={loading} easyContent={easyContent}/>
                                :
                                <Loading/>
                        }
                    </>
            }

        </MainContent>
    )
}

export default Watchlist