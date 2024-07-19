import PropTypes from "prop-types";
import Flashcard from "./FlashCard";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FlashcardList({ flashcards, setAnsweredCount }) {
  return (
    <List>
      {flashcards.map((card, index) => (
        <Flashcard
          key={index}
          index={index + 1}
          card={card}
          setAnsweredCount={setAnsweredCount}
        />
      ))}
    </List>
  );
}

FlashcardList.propTypes = {
  flashcards: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  setAnsweredCount: PropTypes.func.isRequired,
};
