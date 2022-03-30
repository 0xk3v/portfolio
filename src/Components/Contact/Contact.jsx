import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { ContactContents, ContactWrapper } from "./Contact.style";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactContents>
        <div className="mail">
          <MdEmail />
          <a href="mailto:kevin_@tuta.io">kevin_@tuta.io</a>
        </div>
        <div className="github">
          <BsGithub />
          <a href="https://github.com/n-kev1n">n-kev1n</a>
        </div>
      </ContactContents>
    </ContactWrapper>
  );
};

export default Contact;
