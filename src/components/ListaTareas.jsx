import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas}) => {
  return (
    <div>
        <ListGroup>
          {
            tareas.map((tarea, index) => (
              <ItemTarea key={index} tareaFormulario={tarea} />
            ))
          }
    </ListGroup>
    </div>
  )
}

export default ListaTareas