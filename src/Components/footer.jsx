import '../assets/scss/footer.scss';
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import PropTypes from 'prop-types';
import logo from '../assets/Mc.png';


const Footer = (props) => {
  const{
    name,
    email,
    linkedin,
    github,
  } = props;

  return (
    <footer>

      <img src={logo} alt="logo" className="logo" />

      <div className='social'>

      <a href={`mailto:${email}`} className='socialIcons'>
        <FaEnvelope />
      </a>
      <a href={`https://github.com/${github}`} className='socialIcons'>
        <FaGithub />        
      </a>
      <a href={`https://www.linkedin.com/in/${linkedin}`} className='socialIcons'>
        <FaLinkedin />
      </a>

      </div>

      <p>
        Created by <a href="https://matteocicerani.netlify.app/">{name}</a>
      </p>

    </footer>
  );
};


Footer.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};


Footer.defaultProps = {
  name:""
}


export default Footer;
