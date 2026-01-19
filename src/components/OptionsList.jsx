import classNames from 'classnames';

function OptionsList({ options, correctAnswer, selectedOption, onSelect }) {
    return (
        <div className="options-list">
            {options.map((option) => {
                const btnClass = classNames('btn-option', {
                    'correct': selectedOption && option === correctAnswer,
                    'wrong': selectedOption && selectedOption === option && option !== correctAnswer,
                    'disabled': selectedOption && selectedOption !== option
                });

                return (
                    <button
                        key={option}
                        className={btnClass}
                        onClick={() => onSelect(option)}
                        disabled={!!selectedOption}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}

export default OptionsList;