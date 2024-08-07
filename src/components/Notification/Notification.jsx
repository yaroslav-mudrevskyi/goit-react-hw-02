import s from "./Notification.module.css";

const Notification = ({ title }) => {
  return <div className={s.title}>{title}</div>;
};

export default Notification;
