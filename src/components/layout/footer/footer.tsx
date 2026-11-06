import { Mail, MapPin } from '../../../assets/icons/icons';
import { SocialLinks } from '../../common/socialLinks';
import { contactDetails } from '../../../data/contact';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="brand-mark__text">Mukiibi Ryan</span>
          <p>Software engineering student · aspiring developer · educational technology enthusiast</p>
        </div>

        <div className="footer-meta">
          <div className="meta-item"><MapPin size={16} /> {contactDetails.locationSummary}</div>
          <a className="meta-item" href={`mailto:${contactDetails.email}`}><Mail size={16} /> {contactDetails.email}</a>
        </div>

        <SocialLinks compact />
      </div>
    </footer>
  );
}
