import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/layout/header.js';

 const Body = styled.div `
  
  background-color:#17d6d2;
  width:100vw;
  height:100vh;
  
  
  
  `
class Home extends Component{
 


  render(){
    return(
    <div>
    <Body>
      <Header/>
      <p>yo</p>
    </Body>
    </div>


    )}}

export default Home;