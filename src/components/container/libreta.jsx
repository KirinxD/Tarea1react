import React from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/contactoComponent";

const Libreta = () => {
  const contactoDefault = new Contacto(
    "Sasuke",
    "Chidori",
    "sasukechidori@gmail.com",
    true
  );

  return (
    <div>
      <h1>Contacto</h1>
      <div>
        <ContactoComponent task={contactoDefault}></ContactoComponent>
      </div>
    </div>
  );
};

Libreta.propTypes = {};

export default Libreta;
