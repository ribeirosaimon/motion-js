import styled from "styled-components";
import WatchlistContent from "./WatchlistContent";
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
    const [myportfolio, setMyportfolio] = useState({});
    const [saveCompany, setSaveCompany] = useState(false)

    useEffect(() => {
        addCompany()
    },[saveCompany])

    useEffect(() => {
        addCompany()
    }, [])

    const addCompany = () => {
        HttpGetAxios("/portfolio")
            .then(r => {
                setMyportfolio(r.data)
                setLoading(false)
            })
            .catch(() => {
                    DangerTool("You not have portfolio")
                    setMyportfolio(null)
                    setLoading(false)
                }
            )
    }
    const createPorfolio = (event) => {
        event.preventDefault()
        HttpPostAxios("portfolio")
            .then(() => {
                HttpGetAxios("/portfolio")
                    .then(r => {
                        setMyportfolio(r.data)
                    })
                    .catch(() => {
                            DangerTool("You not have portfolio")
                            setMyportfolio(null)
                            setLoading(false)
                        }
                    )
                SuccessTool("Portfolio successful created")
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
                    <MotionIcon title={"Add portfolio"} className="bi bi-newspaper" style={{"padding": "10px"}}
                                onClick={createPorfolio}/>

                    <MotionIcon title={"Exclude portfolio"} className="bi bi-calendar2-x" style={{"padding": "10px"}}
                                onClick={deletePortfolio}/>
                </div>
            </InfoMenu>
            <SearchBar saveCompany={saveCompany} setSaveCompany={setSaveCompany}/>

            {
                myportfolio === null ?
                    <DivNotFound>Not found portfolio</DivNotFound>
                    :
                    <>
                        {
                            !loading
                                ?
                                <WatchlistContent myportfolio={myportfolio} loading={loading}/>
                                :
                                <Loading/>
                        }
                    </>
            }

        </MainContent>
    )
}

export default Watchlist