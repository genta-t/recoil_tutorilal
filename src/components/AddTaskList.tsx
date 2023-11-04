import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { addTitleState } from '../states/addTitleState';
import { TypeTaskProps } from '../types/Task';
import "./Task.css";

const AddTaskList = ({task}: TypeTaskProps) => {
  const [ addTitle, setAddTitle ] = useRecoilState(addTitleState);
  const [ editTitle, setEditTitle ] = useState(task.title);
  const [ isEditing, setIsEditing ] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleEdit = async () => {
    setIsEditing(true);
  };
  
  const handleSave = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const editTitleList = addTitle.map((a) => {
      if (a.id === task.id) {
        return { ...a, title: editTitle };
      }
      return a;
    });
    setAddTitle(editTitleList);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    setIsEditing(true);
  };


  return (
    <li key={task.id}>
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          value={editTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave}>保存</button>
        ) : (
          <button onClick={handleEdit}>編集</button>
        )}
      </div>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
}

export default AddTaskList;
