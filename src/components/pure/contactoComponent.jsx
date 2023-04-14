import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoComponent = (task) => {
  const [estado, setestado] = useState(task.task.conectado);

  const cambiarEstado = () => {
    setestado(!estado);
  };
  return (
    <div>
      <h2>Nombre: {task.task.nombre}</h2>
      <h3>Descripción: {task.task.apellido}</h3>
      <h4>Email: {task.task.email}</h4>
      <h5>Estado: {estado ? "Contacto En Línea" : "Contacto No Disponible"}</h5>
      <button onClick={cambiarEstado}>Actualizar estado</button>
    </div>
  );
};

ContactoComponent.propTypes = {
  task: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
