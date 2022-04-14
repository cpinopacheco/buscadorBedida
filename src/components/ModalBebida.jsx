import { Modal, Image } from "react-bootstrap";
import useBedidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBedidas();

  const {
    strDrinkThumb: imagenBebida,
    strDrink: nombreBedida,
    strInstructions: instrucciones,
    idDrink: bebidaId,
  } = receta;

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={bebidaId + i}>
            {receta[`strIngredient${i}`]}
            {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={imagenBebida} alt={`Imagen receta ${imagenBebida}`} />
        <Modal.Header>
          <Modal.Title>{nombreBedida}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Intrucciones</h2>
            {instrucciones}
            <h2>Ingredientes y cantidades</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalBebida;
