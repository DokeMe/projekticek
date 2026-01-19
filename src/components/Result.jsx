function Result({ score, total, onRestart }) {
    const percentage = Math.round((score / total) * 100);

    let message = "propadnes z hs";
    if (percentage > 50) message = "to by bylo tak 4-";
    if (percentage === 100) message = "dobreho dne, mas jasnou jednicku";

    return (
        <div className="result-card">
            <h2>konec kvizu</h2>
            <div className="score-display">
                <p>ziskal jsi <strong>{score}</strong> z <strong>{total}</strong> bodu.</p>
                <p className="percentage">({percentage} %)</p>
            </div>
            <p className="message">{message}</p>

            <button className="restart-btn" onClick={onRestart}>
                restartovat kviz
            </button>
        </div>
    );
}

export default Result;