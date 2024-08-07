import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  return (
    <ul className={s.pointList}>
      {feedback.map(([key, value]) => (
        <li key={key} className={s.btn}>
          <span>
            {key}: {value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
