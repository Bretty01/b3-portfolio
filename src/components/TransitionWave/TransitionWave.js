import "./TransitionWave.scss";
const TransitionWave = (props) => {
  return (
    <div
      className={props.inverse ? "transition-wave inverse" : "transition-wave"}
    />
  );
};
export default TransitionWave;
