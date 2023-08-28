import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const ContactForm = () => {

 const onViaCallSubmit =() =>{
  console.log("i am from call");
 }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
       
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
      
          <Button 
           onClick= { onViaCallSubmit}
          text="VIA CALL" icon={<MdLocalPhone fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize="24px" />}
        />

        <form>
           <div className={styles.form_control} > <label htmlFor="name">Name</label>
          <input type="text" name="name" /></div>

          <div className={styles.form_control} > <label htmlFor="name">Email</label>
          <input type="email" name="email" /></div>

          <div className={styles.form_control} > <label htmlFor="name">Text</label>
          <textarea name="text"   rows="6"/></div>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>  
             <Button
          text="SUBMIT BUTTON"
        /></div>
       
          
        </form> 
      </div>
      <div className={styles.contact_image}>
        <img src="/images/service.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
