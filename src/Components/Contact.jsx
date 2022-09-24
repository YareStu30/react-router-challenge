import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <form>
        <h1>Cuentanos, ¿En qué podemos ayudarte?</h1>
        <div>
          <p>Email</p>
          <input type="email" name="email" id="txtEmail" cols="50" className="w-50" />
        </div>

        <div>
          <p>Descripción</p>
          <textarea
            name="description"
            id="txtDescription"
            cols="50"
            className="w-50"
          ></textarea>
        </div>

        <input type="submit" value="Send" id="btnSend" className="btn2 " />
      </form>
    </div>
  );
};
export default Contact;
