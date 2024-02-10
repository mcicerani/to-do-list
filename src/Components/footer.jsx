import '../assets/scss/footer.scss';
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import PropTypes from 'prop-types';
import logo from '../assets/Mc.svg';


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


Footer.propTypes = { // PropTypes is a special property in React which helps in documenting the intended types of properties passed to a component.
  name: PropTypes.string, // name is a string
  email: PropTypes.string, // email is a string
  linkedin: PropTypes.string, // linkedin is a string
  github: PropTypes.string, // github is a string
};


Footer.defaultProps = { // defaultProps is a special property in React which helps in providing default values for the properties passed to a component.
  name:"", // name is a string
}


export default Footer;
