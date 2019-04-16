import React from 'react';
import '../assets/styles/footer.scss'
import ue from '../assets/images/ue.png'
class Footer extends React.Component {

    changeLanguage = (e) => {
        this.props.changeLanguage(e.target.classList[0])
    };

    render() {
        return (
            <div className="footer container-fluid">
                <div className="container text-center">
                    <img className="" src={ue} alt=""/>
                    <p className="footer-notice">Projekt współfinansowany ze środków Dotacje dla innowacyjnych MŚP, Regionalnego Programu Operacyjnego Województwa Kujawsko-Pomorskiego na lata 2014-2020
                    </p>
                    {/*<div className="row">*/}
                    {/*    <div className="col-sm-8">*/}
                            {/*<ul className="bottom-nav">*/}
                            {/*    <li className="first">Imprint</li>*/}
                            {/*    <li>About us</li>*/}
                            {/*    <li>Blog</li>*/}
                            {/*    <li>Second Opinion</li>*/}
                            {/*    <li>Business</li>*/}
                            {/*    <li>Our Team</li>*/}
                            {/*    <li>Careers</li>*/}
                            {/*    <li>Press</li>*/}
                            {/*    <li>Help</li>*/}
                            {/*</ul>*/}

                        {/*</div>*/}
                        {/*<div className="language-select-container col-sm-4">*/}
                        {/*    This page is also available in:*/}
                        {/*    <ul className="bottom-nav-language">*/}
                        {/*        <li onClick={this.changeLanguage} className="en" >English</li>*/}
                        {/*        <li onClick={this.changeLanguage} className="de" >Deutsch</li>*/}
                        {/*        <li onClick={this.changeLanguage} className="pl" >Polski</li>*/}
                        {/*        /!* <li>Français</li>*/}
                        {/*            <li>Español</li>*/}
                        {/*            <li>Italiano</li>*/}
                        {/*            <li>Русский</li>*/}
                        {/*            <li>العربية</li> *!/*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div className="footer-icons col-sm-4">*/}
                        {/*    <i className="fab fa-facebook-f"></i>*/}
                        {/*    <i className="fab fa-twitter"></i>*/}
                        {/*    <i className="fab fa-linkedin-in"></i>*/}
                        {/*    <i className="fab fa-google-plus-g"></i>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Footer;