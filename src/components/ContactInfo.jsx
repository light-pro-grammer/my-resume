import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Ivan Parkhomenko</h2>
      <section class="contacts">
        <h3>Contacts</h3>
        <hr />
        <h4>Address</h4>
        <p>Chernihiv, Ukraine</p>
        <h4>Mobile Number</h4>
        <p>+380 123456789</p>
        <h4>E-mail</h4>
        <a href="mailto:parkhomenko@gmail.com">parkhomenko@gmail.com</a>
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/">https://www.linkedin.com/</a>
      </section>
      <section class="languages">
        <h3>Languages</h3>
        <hr />
        <p>Ukrainian - Native</p>
        <p>English - C1</p>
        <p>Spanish - B2</p>
        <p>French - A2</p>
      </section>
    </div>
  );
};

export default ContactInfo;
