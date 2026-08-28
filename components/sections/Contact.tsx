import Script from "next/script";
import type { Dictionary } from "@/i18n/dictionaries/es";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section className="contact" id="contacto">
        <div className="container">
          <div className="section-head reveal">
            <span className="label">{dict.label}</span>
            <h2 className="section-heading">{dict.heading}</h2>
            <p className="section-subtext">{dict.subtext}</p>
            <div className="contact__meta">
              {dict.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="booking-widget reveal">
            <iframe
              src="https://software.metatok.ai/widget/booking/Z5Iu4ImaLs5OGIBEKM6z"
              allow="payment"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="Z5Iu4ImaLs5OGIBEKM6z_1787895624754"
              className="booking-widget__iframe"
              title={dict.bookingTitle}
            />
          </div>
          <Script src="https://software.metatok.ai/js/form_embed.js" strategy="lazyOnload" />

          <div className="contact__divider">
            <span>{dict.dividerText}</span>
          </div>

          <form className="contact__form reveal" id="contactForm" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{dict.form.name}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">{dict.form.company}</label>
                <input type="text" id="company" name="company" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">{dict.form.email}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{dict.form.phone}</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">{dict.form.message}</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              {dict.form.submit}
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <p className="form-success" id="formSuccess" role="status">{dict.form.success}</p>
          </form>
        </div>
      </section>
  );
}
