import React, {useState, useContext} from 'react'
import {InputContext} from '../App'
import styled from 'styled-components'

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 13px;
    font-family: "Lato", sans-serif;
    background-color: yellow;
`
const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "Lato", sans-serif;
    margin-bottom: 1rem;
    padding: 8px 0;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
`
const TextArea = styled.textarea `
    width: 100%;
    height: 80%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
    background-color: yellow;
`
const Markdown = (props) => {
 
    const [markdown, setMarkdown] = useContext(InputContext);
    const handleChange = event => {
        setMarkdown(event.target.value)
    }

  return (
   <Container>
        <Title>Markdown Area</Title>
        <TextArea 
        value={markdown} onChange={handleChange}
        />
   </Container>
  )
}

export default Markdown