import React,{useRef, useState} from 'react';
import styles from "../styles/card.module.css"
import EditTaskPopup from './Modals/EditTask';
import { useDrag, useDrop } from 'react-dnd';

const Cards = ({taskObj, index, deleteTask, updateListArray}) => {

  const [modal, setModal] = useState(false);
  
  const [{isDragging}, drag] = useDrag(() =>({
    type: "cards",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }))

  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
      accept: "cards",
      drop: (item) => addCardToBoard(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
  }))


    const addCardToBoard = () =>{
      console.log("it drops")
    }
  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
]
    const updateTask = (obj) => {
      updateListArray(obj, index)
    }

    const handleDelete = () => {
      deleteTask(index)
    }

    const toggle = () => {
      setModal(!modal)
    }
  return (
    <div className={styles.container} ref={drop}>
    <div class = "mr-5" className={styles.cardwrapper} ref={drag}style={{opacity: isDragging ? 0: 1 ,border: isDragging ?  "5px solid lightgreen" : "0px" }}>
            <div className = {styles.cardtop} style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className={styles.taskholder}>
                <span className={styles.cardheader} style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer", marginRight: 7}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        </div>
        <EditTaskPopup modal = {modal} toggle={toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
  );
}

export default Cards;
