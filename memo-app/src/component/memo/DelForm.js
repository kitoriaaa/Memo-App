import React, { useState } from "react";
import usePersist from "../Persist";

function DelForm() {
  const [memo, setMemo] = usePersist("memo", []);
  const [num, setNum] = useState(0);

  const doChange = (e) => {
    setNum(e.target.value);
  };

  const doAction = () => {
    let res = memo.filter((_, key) => {
      return key != num;
    });
    console.log(res);
    setMemo(res);
    setNum(0);
  };

  let items = memo.map((value, key) => (
    <option key={key} value={key}>{value.message.substring(0, 10)}</option>
  ));

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <select onChange={doChange} className="form-control-sm col" defaultValue="-1">{items}</select>
        <input type="submit" value="Del" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  );
}

export default DelForm;
