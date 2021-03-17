import React, { useState } from "react";
import usePersist from "../Persist";

function FindForm() {
  const [memo, ,] = usePersist("memo", []);
  const [, setFMemo] = usePersist("findMemo", []);
  const [message, setMessage] = useState('');
  const [, setMode] = usePersist("mode", 'find');

  const doChange = (e) => {
    setMessage(e.target.value);
  };

  const doAction = () => {
    if (message === '') {
      setMode('default');
      return;
    }
    let res = memo.filter((item) => {
      return item.message.includes(message);
    });
    console.log(res);
    setFMemo(res);
    setMode('find');
    setMessage('');
  };

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" onChange={doChange} value={message} className="form-control-sm col" />
        <input type="submit" value="Find" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  );
}

export default FindForm;
