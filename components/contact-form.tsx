export function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-grid">
        <label>
          <span>Full Name</span>
          <input type="text" placeholder="Enter your name" />
        </label>

        <label>
          <span>Email Address</span>
          <input type="email" placeholder="email@example.com" />
        </label>
      </div>

      <div className="form-grid">
        <label>
          <span>Phone</span>
          <input type="tel" placeholder="+1 (314) 000-0000" />
        </label>

        <label>
          <span>Interest</span>
          <select defaultValue="Commercial Development">
            <option>Commercial Development</option>
            <option>Historic Preservation</option>
            <option>New Construction</option>
            <option>General Inquiry</option>
          </select>
        </label>
      </div>

      <label>
        <span>Message</span>
        <textarea
          rows={5}
          placeholder="Tell us about your project or question..."
        />
      </label>

      <button type="submit" className="button button-solid">
        Send Message
      </button>
    </form>
  );
}
