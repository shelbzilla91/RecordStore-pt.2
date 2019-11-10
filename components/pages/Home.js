import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../layout/header.js'
import Menu from '../layout/menu.js'

 const Body = styled.div `
  
  background-color:#2f2e36;
  width:100vw;
  height:100vh;
  
  
  
  `
class Home extends Component{
 


  render(){
    return(
    <div>
    <Body>
    <Header/>
    <Menu/>
      <p>yo</p>
    </Body>
    </div>


    )}}

export default Home;