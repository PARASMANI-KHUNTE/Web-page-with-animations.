import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin ,faGithub , faXTwitter , faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope   } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className="items-center flex flex-col  p-5 space-y-2">
        <div>
            <h1>All Right Reserved 2024 <span className="font-bold">PARAS</span></h1>
        </div>
      <div className="Links ">
        <ul className="flex space-x-6 mt-3 font-mono ">
            <li><a href=""className='rounded-3xl hover:text-blue-500  p-3' ><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></li>
            <li><a href=""className='rounded-3xl hover:text-green-700  p-3' ><FontAwesomeIcon icon={faGithub} size='xl'  /></a></li>
            <li><a href=""className='rounded-3xl hover:text-red-500  p-3' ><FontAwesomeIcon icon={faGoogle} size='xl'  /></a></li>
            <li><a href=""className='rounded-3xl hover:text-blue-500  p-3' ><FontAwesomeIcon icon={faXTwitter} size='xl'  /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
