import React, { useState } from "react";
import FlashcardList from "./components/FlashCardList";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import styled from "styled-components";

const cards = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  {
    question: "O React é __",
    answer: "Uma biblioteca JavaScript para construção de interfaces",
  },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "Interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    question: "Usamos o npm para __",
    answer: "Gerenciar os pacotes necessários e suas dependências",
  },
  {
    question: "Usamos props para __",
    answer: "Passar diferentes informações para componentes",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

export default function App() {
  const [flashcards] = useState(cards);
  const [answeredCount, setAnsweredCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <FlashcardList
          flashcards={flashcards}
          setAnsweredCount={setAnsweredCount}
        />
      </div>
      <Footer>
        {answeredCount}/{flashcards.length} CONCLUÍDOS
      </Footer>
    </>
  );
}

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  color: #333333;
  background-color: #fff;
`;
