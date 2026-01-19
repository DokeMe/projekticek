import { useState } from 'react';
import { questions } from './questions';
import Quiz from './components/Quiz.jsx';
import Result from './components/Result';
import './App.css';

function App() {
    const [gameStarted, setGameStarted] = useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const isGameOver = currentQuestionIndex >= questions.length;

    const handleStart = () => {
        setGameStarted(true);
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setGameStarted(false); // Vrátí tě na úvodní obrazovku
    };

    return (
        <div className="app-container">
            <h1>kviz</h1>

            {!gameStarted ? (
                <div className="quiz-card" style={{ textAlign: 'center' }}>
                    <h2>ready?</h2>
                    <p style={{ margin: '20px 0', color: 'var(--text-muted)' }}>
                        {questions.length} otázek.<br />
                        10 sekund na otázku
                    </p>
                    <button className="next-btn" onClick={handleStart}>
                        SPUSTIT TEST
                    </button>
                </div>
            ) : isGameOver ? (
                <Result
                    score={score}
                    total={questions.length}
                    onRestart={handleRestart}
                />
            ) : (
                <Quiz
                    data={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    totalQuestions={questions.length}
                    currentQuestionNumber={currentQuestionIndex + 1}
                />
            )}
        </div>
    );
}

export default App;