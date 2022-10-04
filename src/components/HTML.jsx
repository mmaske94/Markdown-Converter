import React, {useContext} from 'react'
import {InputContext} from '../App'
import styled from 'styled-components'


const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 13px;
    font-family: "Lato", sans-serif;
    background-color: black;
`
const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "Lato", sans-serif;
    margin-bottom: 1rem;
    padding: 8px 0;
    border-bottom: 1px solid yellow;
    display: flex;
    justify-content: center;
    color: yellow;
`

const ResultArea = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    color: yellow;
`


const convert = (text) => {
    const toHTML = text
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^ (.*$)/gim, '<p>$1</p>')
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2">$1</a>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
	.replace(/\*(.*)\*/gim, '<i>$1</i>');
  return toHTML.trim()
}

const HTML = () => {

    const [markdown, setMarkdown] = useContext(InputContext);

  return (
    <Container>
        <Title>HTML Area</Title>
        <ResultArea>
            {convert(markdown)}
        </ResultArea>
      
    </Container>
  )
}

export default HTML