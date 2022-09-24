import React from "react";

const Contact = () => {
  return (
    <div>
      <form action="">
        <div>
          <p>Email</p>
          <input type="email" name="email" id="txtEmail" />
        </div>

        <div>
          <p>Descripción</p>
          <textarea
            name="description"
            id="txtDescription"
            cols="60"
            rows="10"
          ></textarea>
        </div>

        <input type="submit" value="Send" id="btnSend" />
      </form>
    </div>
  );
};
export default Contact;
