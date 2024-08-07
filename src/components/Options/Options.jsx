import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({
  options,
  updateFeedback,
  totalFeedback,
  handleResetClick,
}) => {
  return (
    <>
      <ul className={s.pointList}>
        {options.map((option) => (
          <button
            className={s.btn}
            key={option}
            onClick={() => updateFeedback(option)}
          >
            {option}
          </button>
        ))}
        {totalFeedback > 0 && (
          <li>
            <button onClick={handleResetClick} className={clsx(s.btn, s.reset)}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
