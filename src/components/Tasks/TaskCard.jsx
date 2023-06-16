import { Button, Caption1, Card, CardFooter, Checkbox, Text } from "@fluentui/react-components"
import { UpdateTask } from "./UpdareTask";
import { useEffect, useState } from "react";

const TaskCard = (props) => {
    const [checkBox,setCheckBox] = useState(props.element.state == 'completed');
    

    useEffect(() => {

        props.updateTask(props.id,{...props.element,state: checkBox ? 'completed' : 'incomplete' });

    },[checkBox]);

    return (
        <Card style={{maxWidth:'300px',minWidth:'100px'}}>
            <Checkbox id="task-2" checked={checkBox} onChange={(e) => setCheckBox(e.target.checked)} />

            <label htmlFor="task-2">
                <Text block weight="semibold">
                    {props.element.name}
                </Text>

                <Caption1 block>
                    {props.element.description}
                </Caption1>
            </label>
            <CardFooter>
                <Button onClick={() => props.deleteTask(props.id)}>Eliminar</Button>
                <UpdateTask {...props}/>
            </CardFooter> 
        </Card>
    );
}

export default TaskCard;