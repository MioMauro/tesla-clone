import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";

function Header() {
  const [burgherStatus, setBurgherStatus] = useState(false)
  return (
    <Container>
    <a>
      <img src="/images/logo.svg" alt='car' />
    </a>      
    <Menu>    
    <a href="/#">Model S</a>
    <a href="/#">Model 3</a>
    <a href="/#">Model X</a>
    <a href="/#">Model Y</a>
    </Menu>
    <RightMenu>
    <a href="/#">Shop</a>
    <a href="/#">Tesla Account</a>      
    <CustomMenu onClick={()=> setBurgherStatus(true)}>
      <FaBars />
    </CustomMenu> 
    </RightMenu> 
      <BurgerNav show={burgherStatus}>
      <CustomClose onClick={()=> setBurgherStatus(false)}>
      <FaHashtag />
      </CustomClose>  
        <li><a href='/#'>Existing Inventory</a></li>
        <li><a href='/#'>Used Inventory</a></li>
        <li><a href='/#'>Trade-in</a></li>
        <li><a href='/#'>CyberTruck</a></li>
        <li><a href='/#'>Roadster</a></li>
        <li><a href='/#'>Semi</a></li>
        <li><a href='/#'>Utilities</a></li>
        <li><a href='/#'>Test Drive</a></li>
      </BurgerNav>      
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items:center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: no-wrap;
}

@media(max-width: 768px) {
  display: none;
}
`
const RightMenu = styled.div`
display:flex;
align-items: center;
a{  
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;  
}
`

const CustomMenu = styled.div`
margin-right: 1rem;
cursor:pointer;
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style:none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.4s ease-in;
li {
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

a {
  font-weight: 600;
}
`
const CustomClose = styled.div`
display: flex;
justify-content: flex-end;
cursor:pointer;
`