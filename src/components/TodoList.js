import React, {useEffect, useState} from 'react';
import styles from '../styles/todo.module.css';
import Cards from './Cards';
import Createtask from './Modals/createTask';

const Todolist = () => {

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])


    useEffect(() =>{
      let arr = localStorage.getItem("taskList")

      if(arr) {
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }
    }, [])

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
        let tempList  = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
  }

  return (
    <div className={styles.container}>
      <div>
        <a href="mailto:ivoinestrachan242@gmail.com">
        Bug Report
        </a>
        </div>
      <h2>Todo List</h2>
      <button className={styles.button} onClick={() => setModal(true)}>Create Task</button>
      <div className="task-container">
      {taskList.map((obj , index ) => <Cards taskObj={obj} index={index}/> )}
      </div>
      <Createtask toggle = {toggle} modal = {modal} save={saveTask}/>
    </div>
  );
}

export default Todolist;
