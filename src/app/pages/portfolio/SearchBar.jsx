import MotionIcon from "../../components/icon/MotionIcon";
import styled from "styled-components";
import {useEffect, useState} from "react";
import MotionWrapper from "../../components/wrapper/MotionWrapper";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import Loading from "../loadingPage/Loading";

const CompanySearchBar = styled.div`
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

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [motionWrapper, setMotionWrapper] = useState(false)
    const [loading, setLoading] = useState(true)
    const [foundCompany, setfoundCompany] = useState({})

    const addCompany = () => {
        setMotionWrapper(true)
        HttpGetAxios("/company/code/" + search)
            .then(r => {
                setfoundCompany(r.data)
                setLoading(false)
            })
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
                        <CompanyInformation motionWrapper={motionWrapper} setMotionWrapper={setMotionWrapper}/>
                    </MotionWrapper>
                }


            </CompanySearchBar>
        </>
    );
}

const CompanyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 50vh;
  width: 50%;
  background-color: white;
  border-radius: 20px;
`;

const CloseIcon = styled.div`
  font-size: 25px;
  margin-left: auto;
`;
const CompanyInformation = ({motionWrapper, setMotionWrapper, loading, company}) => {

    return (
        <CompanyInfoContent>
            {
                !loading ?
                    <Loading/> :
                    motionWrapper &&
                    <>
                        <div>
                            Company: {}
                        </div>
                    </>
            }
            <CloseIcon>
                <MotionIcon className="bi bi-x-lg" onClick={() => setMotionWrapper(!motionWrapper)}/>
            </CloseIcon>
        </CompanyInfoContent>
    )
}
export default SearchBar;