import React from "react";
import { IoCall } from "react-icons/io5";
import { TbMessageFilled } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Button/Button";
import css from "./Contact.module.css";

const Contact = () => {
  const Submit = (e) => {
  e.preventDefault(); // stop page reload

  console.log("Form Submitted!");

  const name = e.target.name.value;
  const subject = e.target.subject.value;
  const suggestions = e.target.suggestions.value;

  console.log("Name:", name);
  console.log("Subject:", subject);
  console.log("Suggestions:", suggestions);
};


  return (
    <section className={css.container}>
      <div className={css.form}>
        <div className={css.top_btn}>
          <Button
            title="VIA CHAT SUPPORT"
            icon={<TbMessageFilled fontSize="24px" />}
          />
          <Button title="HELP" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button
          title="VIA EMAIL"
          isOutline={true}
          icon={<MdOutlineEmail fontSize="24px" />}
        />
        <form onSubmit={Submit}>
          <div className={css.inputField}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={css.inputField}>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
          </div>
          <div className={css.inputField}>
            <label htmlFor="suggestions">Suggestions</label>
            <textarea
              name="suggestions"
              style={{ padding: "10px" }}
              rows={8}
            ></textarea>
          </div>
          <div  type  = "submit"
          style={{ display: "flex", justifyContent: "end" }}>
            <Button title="Submit" />
          </div>
        </form>
      </div>
      <div className={css.contactImg}>
        <img src="./image/contact.svg" alt="contactImg" />
      </div>
    </section>
  );
};

export default Contact;
