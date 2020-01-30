import React, { useContext, useEffect, useState } from 'react';
import { getNextQuestion, PokeQuizQuestion } from './pokeQuizService';
import { PokeBagContext } from '../../pokeBag.context';

const PokeQuiz = () => {
  const [question, setQuestion] = useState<PokeQuizQuestion>();
  const [answer, setAnswer] = useState<string>();
  const { addPokemon } = useContext(PokeBagContext);

  useEffect(() => {
    (async () => {
      const nextQuestion = await getNextQuestion();
      setQuestion(nextQuestion);
    })();
  }, []);

  async function nextQuestion() {
    const next = await getNextQuestion();
    setAnswer(undefined);
    setQuestion(next);
  }

  if (!question) {
    return null;
  }

  const correctAnswerSelected = answer && answer === question.answer;
  const incorrectAnswerSelected = answer && answer !== question.answer;

  if (correctAnswerSelected) {
    addPokemon(question.answer);
  }

  return (
    <div>
      <p>Who is this?</p>
      <img src={question.image} alt="pokemon" width="150px" />
      {!answer && (
        <div className="quiz-options">
          {question.options.map(option => (
            <div key={option} onClick={() => setAnswer(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      {correctAnswerSelected && <div>That is correct!</div>}
      {incorrectAnswerSelected && (
        <div>Nope. the correct answer was {question.answer}</div>
      )}
      {answer && <button onClick={nextQuestion}>Next</button>}
    </div>
  );
};

export default PokeQuiz;