import { useState, useEffect } from 'react';
import Question from './Question';
import OptionsList from './OptionsList';

function Quiz({ data, onAnswer, totalQuestions, currentQuestionNumber }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        setTimeLeft(10);
        setSelectedOption(null);
    }, [data]);

    useEffect(() => {
        if (selectedOption || timeLeft === 0) return;

        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, selectedOption]);

    const handleOptionClick = (option) => {
        if (selectedOption || timeLeft === 0) return;
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        const isCorrect = selectedOption === data.correctAnswer;
        onAnswer(isCorrect);
    };

    const timeClass = timeLeft <= 3 ? 'timer-value danger' : 'timer-value';

    return (
        <div className="quiz-card">
            <div className="timer-container" style={{marginBottom: '10px'}}>
                <span className="timer-label">CAS: </span>
                <span className={timeClass}>
                    00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </span>
            </div>

            <div className="progress">otazka {currentQuestionNumber} / {totalQuestions}</div>

            <Question text={data.text} />

            <OptionsList
                options={data.options}
                correctAnswer={data.correctAnswer}
                selectedOption={selectedOption}
                onSelect={handleOptionClick}
            />

            {(selectedOption || timeLeft === 0) && (
                <button className="next-btn" onClick={handleNextClick}>
                    dalsi otazka
                </button>
            )}
        </div>
    );
}

export default Quiz;