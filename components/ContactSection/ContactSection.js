import { useRef } from 'react';
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();


  const formSubmitHandler = (event) => {
    event.preventDefault();


    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage
    }

    console.log(formData)

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
    subjectInputRef.current.value = "";

  }


  return (
    <section className={classes.main} id="contact">
      <div className={classes.container}>
        <SectionHeading title="Get in Touch" />
        <p className={classes.subtitle}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <div className={classes.formContainer}>
          <form method="post" onSubmit={formSubmitHandler}>
            <div className={classes.inputContainer}>
              <label htmlFor="name" className={classes.labelName}>
                Your Name
              </label>
              <input type="text" name="name" className={classes.input} ref={nameInputRef}></input>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="email" className={classes.labelName}>
                Email Address
                </label>
              <input
                type="text"
                name="email"
                className={classes.input}
                 ref={emailInputRef}
                required
              ></input>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="subject" className={classes.labelName}>
                Subject
              </label>
              <input
                type="subject"
                name="subject"
                className={classes.input}
                ref={subjectInputRef}
              ></input>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="message" className={classes.labelName}>
                Your Message
              </label>
              <textarea
                type="text"
                name="message"
                rows="4"
                className={classes.textArea}
                ref={messageInputRef}
                required
              ></textarea>
            </div>
            <button type="submit" className={classes.contactBtn}>
              <span className={classes.sendSpan}>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
