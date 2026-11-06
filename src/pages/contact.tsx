import type { FormEvent } from 'react';
import { ArrowRight, FolderGit, Globe, Mail, MapPin, MessageCircleMore } from '../assets/icons/icons';
import { contactDetails } from '../data/contact';

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const organization = String(formData.get('organization') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : '',
    '',
    message,
  ].filter(Boolean).join('\n');

  const mailto = new URL(`mailto:${contactDetails.email}`);
  mailto.searchParams.set('subject', subject || `Portfolio message from ${name}`);
  mailto.searchParams.set('body', body);
  window.location.href = mailto.toString();
}

export default function ContactPage() {
  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <div className="contact-page">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s start a conversation.</h2>
            <p>
              For project inquiries, collaborations, internships, or other opportunities, choose a direct contact option or send a message using the form.
            </p>
          </div>

          <div className="contact-page__grid">
            <div className="contact-page__details">
              <article className="contact-info-card glass-panel">
                <span className="contact-info-card__icon"><Mail size={20} /></span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </div>
              </article>

              <article className="contact-info-card glass-panel">
                <span className="contact-info-card__icon"><MapPin size={20} /></span>
                <div>
                  <h3>Location</h3>
                  <address>{contactDetails.location}</address>
                </div>
              </article>

              <div className="contact-socials glass-panel">
                <h3>Connect with me</h3>
                <div className="contact-socials__links">
                  <a className="contact-social-link" href={contactDetails.linkedin} target="_blank" rel="noreferrer">
                    <Globe size={18} /><span>LinkedIn</span><ArrowRight size={15} />
                  </a>
                  <a className="contact-social-link" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircleMore size={18} /><span>WhatsApp chat</span><ArrowRight size={15} />
                  </a>
                  <a className="contact-social-link" href={contactDetails.github} target="_blank" rel="noreferrer">
                    <FolderGit size={18} /><span>GitHub</span><ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form glass-panel" onSubmit={handleSubmit}>
              <div className="contact-form__heading">
                <span className="eyebrow">Send a message</span>
                <h3>Tell me what you have in mind.</h3>
              </div>

              <div className="contact-form__fields">
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" autoComplete="name" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-organization">Organization <span>(optional)</span></label>
                  <input id="contact-organization" name="organization" autoComplete="organization" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input id="contact-subject" name="subject" required />
                </div>
                <div className="contact-form__field contact-form__field--full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} required />
                </div>
              </div>

              <button className="nexus-btn primary contact-form__submit" type="submit">
                Open email to send <ArrowRight size={16} />
              </button>
              <p className="contact-form__note">
                This form opens your email app with the message ready to send. It does not submit data to this website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}