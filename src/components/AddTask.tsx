import React from 'react';
import { useRecoilValue } from 'recoil';
import { addTitleState, addTitleStateLength } from '../states/addTitleState';
import "./Task.css";

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);

  return (
    <div className="taskField">
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((a) => {
          return (
            <li key={a.id}>{a.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default AddTask;
