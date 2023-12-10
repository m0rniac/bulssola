import Link from 'next/link';
import { FaTelegram, FaWhatsapp, FaInstagramSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="container-fluid mt-3 d-flex justify-content-center">
            <div className="row w-75 justify-content-center align-items-center">
                <div className="col-6 col-md-3">
                    <Link href="https://t.me/christcastr" passHref legacyBehavior>
                        <a target="_blank" className="text-primary">
                            <FaTelegram size={42} /> Telegram
                        </a>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link href="https://wa.me/+50369893085" passHref legacyBehavior>
                        <a target="_blank" className="text-success">
                            <FaWhatsapp size={42} /> WhatsApp
                        </a>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link href="https://www.instagram.com/christcastr" passHref legacyBehavior>
                        <a target="_blank" className='text-info'>
                            <FaInstagramSquare size={42} /> Instagram
                        </a>
                    </Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link href="https://linkedin.com/in/christcastr/" passHref legacyBehavior>
                        <a target="_blank" className="text-primary">
                            <FaLinkedin size={52} /> Linkedin
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
