import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();

  const {
    strDrink: nombreBebida,
    strDrinkThumb: imagenBebida,
    idDrink: bebidaId,
  } = bebida;

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={imagenBebida}
          alt={`Imagen ${nombreBebida}`}
        />

        <Card.Body>
          <Card.Title>{nombreBebida}</Card.Title>
          <Card.Text>Descripción</Card.Text>
          <Button
            variant="warning"
            className="text-uppercase w-100 mt-2"
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(bebidaId);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
