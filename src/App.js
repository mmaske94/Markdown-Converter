import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import styled from 'styled-components'
import Markdown from './components/Markdown';
import HTML from './components/HTML';


const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div`
color: yellow;
font-size: 25px;
font-weight: 700;
font-family: "Lato", sans-serif;
margin-bottom: 1rem;
`
const EditingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const InputContext = createContext()
function App() {

  const [markdown, setMarkdown] = useState('')
  return (
 

    <InputContext.Provider value={[markdown, setMarkdown]}>
    <AppContainer>
      <Title>
        Markdown Converter 
      </Title>
      <EditingContainer>
        <Markdown/>
        <HTML/>
      </EditingContainer>
    </AppContainer>
    </InputContext.Provider>
 
  );
};

export default App;
