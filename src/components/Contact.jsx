import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      Contact;
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" placeholder="ABC" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="ABC@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              placeholder="Tell me about your query"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
