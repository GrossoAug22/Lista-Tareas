import {Form, Button} from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaTareas from "./ListaTareas";

function FormularioTarea() {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Aqui Deberia ir la tarea");
        
    }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Ingresa una tarea" onChange={(e)=>setTarea(e.target.value)}/>
      <Button variant="info">Enviar</Button>
      </Form.Group>
    </Form>
    <ListaTareas />
    </section>
  )
}

export default FormularioTarea
