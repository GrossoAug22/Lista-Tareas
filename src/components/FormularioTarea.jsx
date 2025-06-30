import {Form, Button} from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaTareas from "./ListaTareas";

function FormularioTarea() {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, tarea]);
        setTarea(" ");
    }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
      <Button variant="info" type="submit">Enviar</Button>
      </Form.Group>
    </Form>
    <ListaTareas tareas={tareas} />
    </section>
  )
}

export default FormularioTarea
