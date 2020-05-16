import React from 'react';
import {Row, Col, ButtonGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
  
function Footer() {

return(
    <footer className="App-footer">
        <div className="container">
            <Row>
                <Col md={4} sm={6}>
                    <ul className="list-unstyled">
                        <h4>Links</h4>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </Col>
                
                <Col md={4} sm={6}>
                    <ButtonGroup vertical size="lg">
                        <a className="btn btn-primary text-white" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span className="fa fa-facebook px-5"></span></a>
                        <a className="btn btn-primary text-white" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter px-5"></span></a>
                        <a className="btn btn-primary text-white" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><span className="fa fa-instagram px-5"></span></a>
                    </ButtonGroup>
                </Col>

                <Col md={4} sm={12}>
                    <ul className="list-unstyled">
                        <h4>Help</h4>
                        <li><Link to="/">Resolution Center</Link></li>
                        <li><Link to="/">Seller Information Center</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <p className="text-center">Copyright &copy; Ossama Ismaili</p>
                </Col>
            </Row>
        </div>
    </footer>
    );
}

export default Footer;
