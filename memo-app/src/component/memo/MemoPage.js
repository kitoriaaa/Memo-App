import React from "react";
import usePersist from '../Persist';
import AddForm from "./AddForm";
import Memo from './Memo';
import FindForm from './FindForm';

function MemoPage() {
  const [mode, ,] = usePersist('mode', 'default');

  return (
    <div> <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
        {/* <AddForm /> */}
        {/* <FindForm /> */}
        {/* TODO: DelForm */}
      </div>
      <Memo />
    </div>
  );
}

export default MemoPage;
