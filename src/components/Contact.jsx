import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [emailSent, setEmailSent] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    visible: false,
  });

  const showNotification = (message) => {
    setNotification({ message, visible: true });
  };

  const hideNotification = () => {
    setNotification({ message: "", visible: false });
  };

  const submit = () => {
    setEmailSent(false);
    hideNotification();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      showNotification("Please enter a valid email address.");
      return;
    }

    if (name && email && message) {
      const serviceId = "service_s9vwn3g";
      const templateId = "template_bilnqss";
      const userId = "uBKfqqrr9g-KnE60b";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(() => {
          setEmailSent(true);
          showNotification(
            "Your email has been sent, I will be in touch soon!"
          );
        })
        .catch((err) => {
          showNotification("Failed to send email. Please try again.", err);
        });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      showNotification("All fields must be filled in.");
    }
  };

  return (
    <div className="contact-container">
      <div id="contact-form">
        <h1>Contact Me</h1>

        <h2>Name:</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Email:</h2>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Message here:</h2>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={submit}>Send Message</button>
        {notification.visible && (
          <div className="notification">{notification.message}</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
