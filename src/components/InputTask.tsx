import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { addTitleState } from '../states/addTitleState';
import { inputTitleState } from '../states/inputTitleState';
import "./Task.css";

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  // const inputTitle = useRecoilValue(inputTitleState);
  // const setInputTitle = useSetRecoilState(inputTitleState); 下を使うと良いかも(同じ意味)
  const [ inputTitle, setInputTitle ] = useRecoilState(inputTitleState);
  const [ addTitle, setAddTitle ] = useRecoilState(addTitleState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      console.log(inputTitle)
    },
    [inputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle}]);
    setInputTitle("");
    console.log(addTitle)
  };

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} value={inputTitle} />
      <button type="button" className="addButton" onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputTask;
