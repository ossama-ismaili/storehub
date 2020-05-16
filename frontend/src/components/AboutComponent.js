import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function About(){
    return(
        <div className="App-about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Card className="App-about-card">
                            <CardBody>
                                <CardTitle className="App-about-title"><h1>About Us</h1></CardTitle>
                                <CardSubtitle className="App-about-subtitle"><h2>All you need to know about us</h2></CardSubtitle>
                                <CardText className="App-about-text"><p>Welcome At StoreHub.com, we believe everyone deserves to have a good electronic device or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent you owners from enjoying their own electronic devices. We're excited to help you on your journey!</p></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;