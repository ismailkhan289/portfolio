import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return( 
    <>
  <section className="contact">
    <div className=" overlay text-white">
      <h1>Contact IZME TECH</h1>
      <p>You can contact me through Email or Whatsapp</p>
        <ul>
          <li>
            <a href= "mailto:izmaelkhan@gmail.com"> <MdEmail />izmaelkhan@gmail.com </a>
          </li>
          <li>
            <a href= "tel:+923458127647"><FaPhoneAlt />+49 178 8246 150 </a>
          </li>
        </ul>
    </div>
  </section>
   </>)
};

export default Contact;
