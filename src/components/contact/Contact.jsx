import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div class="center-wrapper">
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chatterjeeishi96@gmail.com</h5>
            <a href="mailto:chatterjeeishi96@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
