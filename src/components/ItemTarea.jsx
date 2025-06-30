import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({tareaFormulario}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tareaFormulario}<Button variant="danger">X</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
