const Person = () => {
  
  function logMe(ger) {
    console.log(ger.target.value);
  }

  return (
    <div className="person_box">
      <div className="each_input_div">
        <label htmlFor="name">Name</label>
        <input type="text" onChange={logMe} />
      </div>
      <div className="each_input_div">
        <label htmlFor="age">Age</label>
        <input type="number" onChange={(e)=>{console.log(e.target.value)}} />
      </div>
      <button className="next_scene">Next Scene</button>
    </div>
  );
};

export default Person;
