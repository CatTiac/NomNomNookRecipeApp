import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork color="white" />
          <Logo to={"/"}>The Nom Nom Nook</Logo>
        </Nav>
        <div className="page-container">
          <Search />
          <hr></hr>
          <Category />
          <Pages />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: white;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(221, 79, 18);
  background: linear-gradient(
    90deg,
    rgba(221, 79, 18, 1) 0%,
    rgba(215, 125, 13, 1) 50%,
    rgba(245, 147, 9, 0) 100%
  );

  svg {
    font-size: 2.5rem;
  }
`;

export default App;
