import React from 'react';
import styled from "styled-components";
import Pin from './Pin'

function Mainboard(props) {
    let { pins } = props;
  return (
    <Wrapper>
        <Container>
          {pins.map((pin, index)=>{
            let {urls} = pin;
            return<Pin key={index} urls={urls}/>
          })}
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
background-color:white;
height: 100%;
width: 100%;
margin-top: 15px;
display: flex;
justify-content: center;
`;
const Container = styled.div`
  background-color: white;
  width: 80%;
  column-count: 5;
  margin: 0 auto;
  height: 100%;
  column-gap: 5px;
`;