import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./useImperativeHandle.css";

function ImperativeHandle() {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <div className="container">
      <h1 className="imperativeHandle">useImperativeHandle</h1>
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(
    ref,
    () => {
      return { submit: handleSubmit };
    },
    []
  );

  return (
    <form>
      <input ref={inputRef} />
    </form>
  );
});

export default ImperativeHandle;
