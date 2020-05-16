import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            fullname:"",
            email:"",
            message:"",
            errorFullname:false,
            errorEmail:false,
            errorMessage:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    resetForm(){
        this.setState({
            fullname:"",
            email:"",
            message:"",
            errorFullname:false,
            errorEmail:false,
            errorMessage:false
        });
    }

    handleSubmit(event){
        let accepted=true;
        event.preventDefault();
        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.fullname.length<5 || this.state.fullname.length>20){
            this.setState({errorFullname:true});
            accepted=false;
        }
        if(!emailRegex.test(this.state.email)){
            this.setState({errorEmail:true});
            accepted=false;
        }
        if(this.state.message.length<10 || this.state.message.length>150){
            this.setState({errorMessage:true});
            accepted=false;
        }
        if(accepted){
            alert("Name : "+this.state.fullname+"\nEmail : "+this.state.email+"\nMessage : "+this.state.message);
            this.resetForm();
        }
    }

    handleError(name){
        switch(name){
            case "fullname":
                return (this.state.errorFullname?"App-error-show":"App-error-hide");
            case "email":
                return (this.state.errorEmail?"App-error-show":"App-error-hide");
            case "message":
                return (this.state.errorMessage?"App-error-show":"App-error-hide");
            default: 
                return "App-error-hide";
        }
    }

    render(){
        return (
        <div className="App-contact">
            <div className="container">
                <h1 className="App-contact-title">If you have any problem, we are here 24h/24 for help</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="fullname" sm={2}>Full Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="fullname" placeholder="Full Name" value={this.state.fullname} onChange={this.handleChange} />
                        </Col>
                        <Col className={"mt-2 "+this.handleError("fullname")} md={12}>
                            <Alert color="danger">
                                Full Name Should be bigger than 5 characters and less than 20
                            </Alert>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        </Col>
                        <Col className={"mt-2 "+this.handleError("email")} md={12}>
                            <Alert color="danger">
                                Email Should be bigger than 5 characters and contains @
                            </Alert>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="message" sm={2}>Message</Label>
                        <Col sm={10}>
                            <Input type="textarea" rows={4} name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
                        </Col>
                        <Col className={"mt-2 "+this.handleError("message")} md={12}>
                            <Alert color="danger">
                                Message Should be bigger than 10 characters and less than 150
                            </Alert>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{offset: 2}}>
                            <Button color="info" className="px-5"><strong>Send</strong></Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>  
        </div>  
        );
    }
}

export default Contact;