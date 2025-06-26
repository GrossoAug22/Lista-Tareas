import {Form, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaTareas from "./ListaTareas";

function FormularioTarea() {
  return (
    <section>
      <Form>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Ingresa una tarea" />
      <Button variant="info">Enviar</Button>
      </Form.Group>
    </Form>
    <ListaTareas />
    </section>
  )
}

export default FormularioTarea
