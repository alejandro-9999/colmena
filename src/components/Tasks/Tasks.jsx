import { useEffect, useState } from "react";
import { AddTask } from "./AddTask";
import TaskCard from "./TaskCard";
import { Divider, Switch } from "@fluentui/react-components";

const Tasks = () => {
    const local_task = JSON.parse(localStorage.getItem("tasks"));

    const [completedList, setCompletedList] = useState(false);
    const [tasks, setTasks] = useState(local_task);
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const deleteTask = (id) => {
        const newArray = [...tasks.slice(0, id), ...tasks.slice(id + 1)];
        setTasks(newArray);
    };

    const updateTask = (id, element) => {
        const newArray = [...tasks];
        newArray[id] = element;
        setTasks(newArray);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    useEffect(() => {

        let newArray = [...tasks];
        
        if(completedList){
            newArray = tasks.filter((task) => task.state == "completed");
        }

        setFilteredTasks(newArray);


    },[completedList,tasks]);

    return (
        <div>
            <AddTask setTasks={setTasks} tasks={tasks} />
            <Switch label="Completadas" checked={completedList} onChange={(e) => setCompletedList(e.target.checked)} />
            <Divider style={{ margin: "10px" }} />
            <div className="task-list">
                {filteredTasks.map((element, key) => (
                    <div key={"div-card-"+key}>
                        <TaskCard key={"card-"+key} element={element} id={key} deleteTask={deleteTask} updateTask={updateTask} completed={element.state} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
