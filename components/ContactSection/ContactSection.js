import SectionHeading from "../UI/SectionHeading/SectionHeading";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <SectionHeading title="Get in Touch" />
        <p className={classes.subtitle}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <div className={classes.formContainer}>
          <form>
            <div className={classes.inputContainer}>
              <label htmlFor="name" className={classes.labelName}>Your Name</label>
              <input type="text" name="name" className={classes.input}></input>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="email" className={classes.labelName}>Email Address</label>
              <input type="text" name="email" className={classes.input} required></input>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="subject" className={classes.labelName}>Subject</label>
              <input type="subject" name="subject" className={classes.input}></input>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="message" className={classes.labelName}>Your Message</label>
                          <textarea
                type="text"
                name="message"
                rows="4"
                              className={classes.textArea}
                required></textarea>
            </div>
            <button type="submit" className={classes.contactBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
