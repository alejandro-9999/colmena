import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button,
    Field,
    Input,
    Textarea,
  } from "@fluentui/react-components";
  import { useRef, useState } from "react";
  
  export const UpdateTask = (props) => {
    const name = useRef();
    const description = useRef();
    
    const [nameValidation, setNameValidation] = useState({ state: "", text: "" });
    const [descriptionValidation, setDescriptionValidation] = useState({ state: "", text: "" });
  
    const updateCurrentTask = () => {
      setNameValidation({ state: "", text: "" });
      setDescriptionValidation({ state: "", text: "" });
  
      if (name.current.value === "") setNameValidation({ state: "error", text: "Este campo es requerido." });
      if (description.current.value === "") setDescriptionValidation({ state: "error", text: "Este campo es requerido." });
  
      if (name.current.value !== "" && description.current.value !== "") {
        props.updateTask(props.id, {
          state: props.element.state,
          name: name.current.value,
          description: description.current.value,
        });
      }
    };
  
    return (
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button>Editar</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Editar Tarea</DialogTitle>
            <DialogContent>
              <Field label="Nombre" validationState={nameValidation.state} validationMessage={nameValidation.text}>
                <Input ref={name} defaultValue={props.element.name} />
              </Field>
              <br />
              <Field label="Descripción" validationState={descriptionValidation.state} validationMessage={descriptionValidation.text}>
                <Textarea id="description" ref={description} defaultValue={props.element.description} />
              </Field>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Cerrar</Button>
              </DialogTrigger>
              <Button appearance="primary" onClick={() => updateCurrentTask()}>
                Actualizar
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    );
  };
  