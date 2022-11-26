
const Title = ({ AllUserDetails }) => {
  let lastReg = AllUserDetails[AllUserDetails.length - 1];

  return (
    <div className="title">
      <div className="container">
        <h2>
          {lastReg
            ? `${lastReg.sessionTitle} - ${lastReg.startYear} / ${lastReg.endYear}`
            : "Session Title - 2022 / 2025"}
        </h2>
      </div>
    </div>
  );
};

export default Title;
