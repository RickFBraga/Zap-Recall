import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Play from "../assets/seta_play.png";
import Flip from "../assets/seta_virar.png";
import Certo from "../assets/icone_certo.png";
import Errado from "../assets/icone_erro.png";
import Quase from "../assets/icone_quase.png";

const Card = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  width: 300px;
  height: auto;
  font-family: Recursive;
  color: #333333;
  font-weight: 700;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
`;

const ButtonErro = styled.button`
  margin-top: 10px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff3030;
  color: #fff;
`;

const ButtonCerto = styled.button`
  margin-top: 10px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2fbe34;
  color: #fff;
`;

const ButtonQuaseErro = styled.button`
  margin-top: 10px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff922e;
  color: #fff;
`;

const OpcoesRespostaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const OpcoesResposta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const Answer = styled.p`
  color: ${(props) => props.color || "black"};
  text-decoration: ${(props) => (props.answered ? "line-through" : "none")};
`;

export default function Flashcard({ index, card, setAnsweredCount }) {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showAnswerButtons, setShowAnswerButtons] = useState(false);
  const [status, setStatus] = useState("");

  const handleFlip = () => {
    setFlipped(true);
  };

  let pergunta = card.question;

  const showAnswer = () => {
    setShowAnswerButtons(true);
    pergunta = "";
  };

  const handleAnswer = (status) => {
    setAnswered(true);
    setStatus(status);
    setAnsweredCount((prev) => prev + 1);
    setShowAnswerButtons(false);
  };

  const statusToIcon = {
    "Zap!": Certo,
    "Quase não lembrei": Quase,
    "Não lembrei": Errado,
  };

  const statusToColor = {
    "Zap!": "green",
    "Quase não lembrei": "orange",
    "Não lembrei": "red",
  };

  const icon = statusToIcon[status];
  const color = statusToColor[status];

  return (
    <Card>
      {showAnswerButtons ? (
        flipped &&
        !answered && (
          <OpcoesRespostaContainer>
            <div>
              <p>{card.answer}</p>
            </div>

            <OpcoesResposta>
              <ButtonErro onClick={() => handleAnswer("Não lembrei")}>
                Não
                <br />
                Lembrei
              </ButtonErro>
              <ButtonQuaseErro
                onClick={() => handleAnswer("Quase não lembrei")}
              >
                Quase
                <br />
                não lembrei
              </ButtonQuaseErro>
              <ButtonCerto onClick={() => handleAnswer("Zap!")}>
                Zap!
              </ButtonCerto>
            </OpcoesResposta>
          </OpcoesRespostaContainer>
        )
      ) : !answered ? (
        <>
          {!flipped ? (
            <>
              <p>Pergunta {index}</p>
              <Button onClick={handleFlip}>
                <img src={Play} alt="Play icon" />
              </Button>
            </>
          ) : (
            <>
              {pergunta}
              <Button onClick={showAnswer}>
                <img src={Flip} alt="Flip icon" />
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <Answer color={color} answered={answered}>
            Pergunta {index}
          </Answer>
          {<img src={icon} alt={status} />}
        </>
      )}
    </Card>
  );
}

Flashcard.propTypes = {
  index: PropTypes.number.isRequired,
  card: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  setAnsweredCount: PropTypes.func.isRequired,
};
