import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { getNextQuestion, PokeQuizQuestion } from './pokeQuizService';
import { PokeBagContext } from '../../pokeBag.context';

import { ROUTES } from '../../routes';

const useQuery = () => new URLSearchParams(useLocation().search);

const useLevel = () => {
  const BEGINNER = 'beginner';
  const POKEMASTER = 'pokemaster';

  const query = useQuery().get('level');
  const history = useHistory();
  const [level, setLevel] = useState<'beginner' | 'pokemaster'>(
    query === POKEMASTER ? POKEMASTER : BEGINNER,
  );

  const isBeginner = level === BEGINNER;

  const toggleLevel = () => {
    setLevel(isBeginner ? POKEMASTER : BEGINNER);
    history.push(
      isBeginner ? `${ROUTES.QUIZ}?level=${POKEMASTER}` : ROUTES.QUIZ,
    );
  };

  return { isBeginner, toggleLevel };
};

const PokeQuiz = () => {
  const [question, setQuestion] = useState<PokeQuizQuestion>();
  const [answer, setAnswer] = useState<string | undefined>();
  const { addPokemon } = useContext(PokeBagContext);

  const { isBeginner, toggleLevel } = useLevel();

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
      <img
        style={{ filter: isBeginner ? undefined : 'brightness(0)' }}
        src={question.image}
        alt="pokemon"
        width="150px"
      />
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
      <div>
        <span>Level: {isBeginner ? 'Beginner' : 'Pokemaster'}</span>
        <button onClick={toggleLevel}>
          {isBeginner ? 'get promoted' : "it's too hard"}
        </button>
      </div>
    </div>
  );
};

export default PokeQuiz;
