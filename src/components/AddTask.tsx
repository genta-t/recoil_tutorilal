import React from 'react';
import { useRecoilValue } from 'recoil';
import { addTitleState, addTitleStateLength } from '../states/addTitleState';
import AddTaskList from './AddTaskList';
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
            <AddTaskList key={a.id} task={a} />
          )
        })}
      </ul>
    </div>
  );
}

export default AddTask;
