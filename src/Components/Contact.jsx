import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <form>
        <div>
          <p>Email</p>
          <input type="email" name="email" id="txtEmail" />
        </div>

        <div>
          <p>Descripción</p>
          <textarea name="description" id="txtDescription" cols="50"></textarea>
        </div>

        <input type="submit" value="Send" id="btnSend" className="btn2" />
      </form>
    </div>
  );
};
export default Contact;
