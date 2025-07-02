import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({tareaFormulario, borrarTarea}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tareaFormulario}<Button variant="danger" onClick={()=>{borrarTarea(tareaFormulario)}}>X</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
