import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const MenuStyle = styled.div `
display: flex;
flex-direction: row;
background-color:#be6b57;
vw: 10%;
vh: 10%;


`

const Menu = () => {

return(
<MenuStyle>
<p>Yo menu</p>
</MenuStyle>
)
}
export default Menu