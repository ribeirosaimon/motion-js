import styled from "styled-components";
import Colors from "../../components/colors/Colors";
import PortfolioContent from "./PortfolioContent";
import Loading from "../loadingPage/Loading";
import {useEffect, useState} from "react";
import {HttpGetAxios, HttpPostAxios} from "../../utils/HttpBasicAxios";
import {DangerTool, ErrorTool, SuccessTool} from "../../components/tooltip/Toll";


const MainContent = styled.div`
  width: 100%;
`;

const InfoMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconMenu = styled.i`
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary};
    color: white;
    border-radius: 5px;
  }
`;

const DivNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: gray;
  font-size: 25px;
`;


const Porfolio = () => {

    const [loading, setLoading] = useState(true)
    const [myportfolio, setMyportfolio] = useState({});

    useEffect(() => {
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
    }, [])
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
                    <IconMenu className="bi bi-newspaper" style={{"padding": "10px"}}
                              onClick={createPorfolio}/>

                    <IconMenu className="bi bi-calendar2-x" style={{"padding": "10px"}}
                              onClick={deletePortfolio}/>
                </div>
            </InfoMenu>
            {
                myportfolio === null ?
                    <DivNotFound>Not found portfolio</DivNotFound>
                    :
                    <>
                        {
                            !loading
                                ?
                                <PortfolioContent myportfolio={myportfolio} loading={loading}/>
                                :
                                <Loading/>
                        }
                    </>
            }

        </MainContent>
    )
}

export default Porfolio