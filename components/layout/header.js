import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderForm = styled.div `

display:flex;
flex-direction:row;
justify-content: space-around;
background-color:#248b8b;
border: 5px solid black;

`


class Header extends Component{


render(){


  return(
   
  <div>
 <HeaderForm>
 <h1>Wreck Records</h1>
  </HeaderForm>
  </div>
  

  )}}

export default Header;