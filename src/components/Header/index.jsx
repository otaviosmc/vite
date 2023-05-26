import React from "react";
import styled from "styled-components";
import {
  Titulo,
  BotaoLista,
  HeaderD,
  Navbar,
  ListaHeader,
  ListaItem,
} from "./estilos";

export default function Header() {
  return (
    <div>
      <HeaderD>
        <Navbar>
          <Titulo>Otavio</Titulo>
          <ListaHeader>
            <ListaItem>
              <BotaoLista>Sobre</BotaoLista>
            </ListaItem>
            <ListaItem>
              <BotaoLista>Habilidades</BotaoLista>
            </ListaItem>
            <ListaItem>
              <BotaoLista>Projetos</BotaoLista>
            </ListaItem>
            <ListaItem>
              <BotaoLista>Contato</BotaoLista>
            </ListaItem>
          </ListaHeader>
        </Navbar>
      </HeaderD>
    </div>
  );
}
