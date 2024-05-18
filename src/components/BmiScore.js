function BmiScore({ bmiNo, bmiName,changeWeight }) {

  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      { <div className="row justify-content-md-center">
      {changeWeight.type === "positive" && (
        <div className="p-3 my-2 alert fs-1 alert-danger col-sm-4">{bmiNo}</div>
         )}
      {changeWeight.type === "negative" && (
        <div className="p-3 my-2 alert fs-1 alert-success col-sm-4">{bmiNo}</div>
         )}
      {changeWeight.type === "normal" && (
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
         )}
      </div> }
      {changeWeight.type === "positive" && (
      <div className="fs-3 fw-bold text-danger">{bmiName}</div>
       )}
      {changeWeight.type === "negative" && (
      <div className="fs-3 fw-bold text-success">{bmiName}</div>
       )}
      {changeWeight.type === "normal" && (
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
       )}
      {changeWeight.type === "positive" && (
        
        <div className="fs-4">"You need lose <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">"You need gain <span className="fw-bold">{changeWeight.wight} kg"</span> </div>
      )}
       {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
    </div>
  );
}

export default BmiScore;
