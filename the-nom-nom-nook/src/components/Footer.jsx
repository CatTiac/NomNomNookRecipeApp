import React from "react";
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

function Footer() {
  return (
    <Sdiv>
      <h3>This app was made by Cait Jackson using the Spoonacular API <BsArrowRight /> <a href="https://spoonacular.com/">Spoonacular</a></h3>
    </Sdiv>
  );
}

const Sdiv = styled.div `
padding: 0.5rem 0.75rem;
background: rgb(255,245,231);
background: linear-gradient(180deg, rgba(255,245,231,1) 0%, rgba(245,148,83,1) 68%, rgba(221,79,18,1) 100%);
`;
    
export default Footer;
