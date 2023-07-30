import {useEffect, useState} from "react";
import {HttpGetAxios} from "../../utils/HttpBasicAxios";
import {ErrorTool} from "../../components/tooltip/Toll";
import MotionIcon from "../../components/icon/MotionIcon";
import styled from "styled-components";

const SaveIcon = styled.div`
  margin-left: 10px;
  font-size: 25px;
  border-radius: 10px;
  color: ${props => props.disabled ? 'rgba(128, 128, 128, 0.3)' : 'black'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const ConfigInfo = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ConfigLabel = styled.div`
  width: 30%;
`;
const Config = () => {
    const [config, setConfig] = useState({})

    useEffect(() => {
        HttpGetAxios("/health/config")
            .then(r => {
                setConfig(r.data)
            })
            .catch(() => {
                ErrorTool("something was wrong!")
            })
    }, [])

    return (
        <>
            <ConfigInfo>
                <ConfigLabel>Cache Time</ConfigLabel>
                <input
                    type="text"
                    onChange={(e) => setConfig(e.target.value)}
                    value={config.CacheTime}

                />
                <SaveIcon>
                    <MotionIcon className="bi bi-check2"/>
                </SaveIcon>
            </ConfigInfo>
            <ConfigInfo>
                <ConfigLabel>Scraping Time</ConfigLabel>
                <input
                    type="text"
                    onChange={(e) => setConfig(e.target.value)}
                    value={config.ScrapingTime}
                />
                <SaveIcon>
                    <MotionIcon className="bi bi-check2"/>
                </SaveIcon>
            </ConfigInfo>
        </>
    )
}

export default Config