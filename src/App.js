
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MotionRouter from "./app/router/Router";
import styled from 'styled-components';
import MotionToastContainer from "./app/components/tooltip/MotionToastContainer";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App = () => {
    return (
        <AppContainer>
                <React.StrictMode>
                    <BrowserRouter>
                        <MotionRouter/>
                    </BrowserRouter>
                </React.StrictMode>
                <MotionToastContainer/>
        </AppContainer>
    );
}

export default App;
