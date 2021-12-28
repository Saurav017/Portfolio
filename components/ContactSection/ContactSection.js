import emailjs from 'emailjs-com'
import { useState, useRef } from 'react';
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import classes from "./ContactSection.module.css";

const ContactSection = () => {

  const [isSuccess, setIsSuccess] = useState(false)

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();
const formRef = useRef();



  const formSubmitHandler = (event) => {
    event.preventDefault();

    
    emailjs
      .sendForm(
        "service_lm5wfov",
        "template_mp8xfjg",
        formRef.current,
        "user_9neBPqWYnQMU1EgP3lreJ"
      )
      .then(
        (result) => {
          setIsSuccess(true)
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
          setIsSuccess(false)
        }, [10000])
    
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

        {isSuccess && <p style={{
          padding: '10px 0',
          color: '#008bc4',
          textAlign: 'center',
          transition: 'all 0.3s ease'
        }}>Hey, Thanks for filling this form. Will be getting back to you ASAP.</p>}
        <div className={classes.formContainer}>
          <form method="post" onSubmit={formSubmitHandler} ref={formRef}>
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
