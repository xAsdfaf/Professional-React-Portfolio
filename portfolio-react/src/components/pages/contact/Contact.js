import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import videoBg from '../assets/images/videoBg.mp4';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgvjjaa");
  if (state.succeeded) {
    return (
      <div className='main'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted/>
    <p className="success">Please allow 24-48 hours for a response.</p>
    </div>
    )
  }
  return (
    <div className='main'>
    <div className='overlay'></div>
    <video src={videoBg} autoPlay loop muted/>
    <h1 className = "contact-header">Contact</h1>

      <form className="form" onSubmit={handleSubmit}>

      <input id="name" type="name" name="name" placeholder="Name"/>
        <input id="email" type="email" name="email" placeholder="Email Address" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Enter your message here."/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button id = "contact-btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      </div>
  );
}
<input type="text" name="email" placeholder="georgejordanjr8@gmail.com"/>;
function App() {
  return <ContactForm />;
}

export default App;
