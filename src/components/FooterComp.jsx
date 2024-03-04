import '../assets/css/Footer.css'        

const FooterComp = () =>{
    return(
        <>
        <footer>
            <div className="footer-row">
                <div className="footer-column">
                    <h3 className='footer-logo'>International Youth Chemistry Olympiad</h3>
                    <p className='web-desc'>
                        An event for the achievement of talented young academics from various countries around the world in solving global problems
                    </p>
                </div>
                <div className="footer-column">
                    <h5>Infromation Links</h5>
                    <ul className='footer-links'>
                        {/* <li>
                            <a href="#">Registration</a>
                        </li> */}
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="https://iysa.or.id" target='_blank'>Our Main Website</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Navigation</h5>
                    <ul className='footer-links'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1KHal6e_EFIXEZVbYmm7CBVWbjx1O_58o/view?usp=drive_link" target='_blank'>Guide Book</a>
                        </li>
                        {/* <li>
                            <a href="#">Gallery</a>
                        </li> */}
                        <li>
                            <a href="#category">Category</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Get In Touch</h5>
                    <ul className='contact-details'>
                        <li>
                            <i className='fas fa-map-marked-alt'></i>
                            <span>Jl. Kemang No. 63 RT 03 RW 06</span>
                        </li>
                        <li>
                            <i className='fas fa-phone-alt'></i>
                            <span>+62817-7091-4129</span>
                        </li>
                        <li>
                            <i className='fas fa-envelope'></i>
                            <span>youngscientist.iysa@gmail.com</span>
                        </li>
                    </ul>
                    <ul className='social-link-icons'>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/iyc.olympiad/" target='_blank'>
                                <i className='fab fa-instagram' target='_blank'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                                <i className='fab fa-youtube'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@iysa.official" target='_blank'>
                                <i className='fab fa-tiktok'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <a href="#">IYCO Official.</a>All rights reserved</span>
                <span className="policy_terms">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Condition</a>
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterComp
