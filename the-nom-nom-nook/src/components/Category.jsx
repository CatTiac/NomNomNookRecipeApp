import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiFoodChain, GiGreekTemple, GiIndianPalace, GiAfrica, GiSouthKorea } from "react-icons/gi";
import { SiFoodpanda } from 'react-icons/si';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
      <SLink to={'/cuisine/Mediterranean'}>
        <GiFoodChain />
        <h4>Mediterranean</h4>
      </SLink>
      <SLink to={'/cuisine/Greek'}>
        <GiGreekTemple />
        <h4>Greek</h4>
      </SLink>
      <SLink to={'/cuisine/Indian'}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </SLink>
      <SLink to={'/cuisine/African'}>
        <GiAfrica />
        <h4>African</h4>
      </SLink>
      <SLink to={'/cuisine/Korean'}>
        <GiSouthKorea />
        <h4>Korean</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <SiFoodpanda />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 8rem;
height: 8rem;
cursor: pointer;
transform: scale(0.8);

h4 {
    color: white;
    font-size: 0.9rem;
}

svg {
    color: white;
    font-size: 1.5rem;
}
&.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
        color: white;
    }

    h4 {
        color: white;
    }
}
`;

export default Category;
