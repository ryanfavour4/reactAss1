
const Click = (props) => {

  return (
    <div>
      <div className="numberer">{props.numbs}</div>
      <button onClick={props.incrementor}>Rush me!</button>
    </div>
  );
};

export default Click;
