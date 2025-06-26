import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        Tarea 1 <Button variant="danger" type="submit">X</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
