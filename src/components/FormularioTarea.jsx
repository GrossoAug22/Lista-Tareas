import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTareas = (datos) => {
    setTareas([...tareas, datos.inputTarea]);
    reset();
  };
  const borrarTarea = (nombreTarea) => {
    const tareasFilter = tareas.filter((tarea) => tarea !== nombreTarea);
    setTareas(tareasFilter);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit(agregarTareas)}
      className="mb-3">
        <Form.Group
          className="mb-1 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            {...register("inputTarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "La tarea no puede tener más de 50 caracteres",
              }
            })}
          />
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.inputTarea?.message}</Form.Text>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;
