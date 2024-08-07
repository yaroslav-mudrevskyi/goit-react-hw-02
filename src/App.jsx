import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [options, setOptions] = useState(
    () => JSON.parse(window.localStorage.getItem("options")) ?? initialState
  );

  useEffect(() => {
    window.localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  const updateFeedback = (feedbackType) => {
    setOptions((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const totalFeedback = Object.values(options).reduce(
    (acc, value) => acc + value,
    0
  );

  const handleResetClick = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveMark = () => Math.round((options.good / totalFeedback) * 100);
  const positivePercentage = `${positiveMark()}%`;

  return (
    <>
      <Description />
      <Options
        options={Object.keys(options)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetClick={handleResetClick}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={[
            ...Object.entries(options),
            ["total", totalFeedback],
            ["Positive", positivePercentage],
          ]}
        />
      ) : (
        <Notification title="No feedback yet" />
      )}
    </>
  );
};

export default App;
