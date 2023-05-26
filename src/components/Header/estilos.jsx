import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderD = styled.header`
  width: 100%;
  background-color: rgb(50, 50, 50);
  padding: 10px 0px;
  box-shadow: 0px 1px 10px white;
`;
export const Navbar = styled.nav`
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-family: "Satisfy", cursive;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const Titulo = styled.a`
  text-decoration: none;
  color: #fff;
  text-shadow: 0px 0px 20px #fff;
  font-size: 48px;
  font-weight: bold;

  &:hover {
    text-shadow: 0px 0px 20px #000;
    transition: 1.2s;
  }
`;
export const ListaHeader = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const ListaItem = styled.li`
  width: 100px;
  border-radius: 50px;
  background-color: #000;
  padding: 10px 20px;
  box-shadow: 0px 0px 10px 2px #fff;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 0px 20px 2px #000;
    color: #000;
    transition: 1.2s;
  }
`;
export const BotaoLista = styled.a`
  text-shadow: 0px 0px 10px white;
  href: ${(props) => props.href};
`;
