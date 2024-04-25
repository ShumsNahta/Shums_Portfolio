import { Button } from 'antd';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_4wcieuj', 'contact_form', form.current, {
                publicKey: '8ddT4WtINCTzW6NBG',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!',response);
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className="text-center bg-body-tertiary" id='contact'>
                <h1 className="h1 fw-bold pt-5">Contact <span className="text-warning">Me</span></h1>
                <p className="text-justify p-1" style={{ fontWeight: "100", fontSize: "14px" }}>Please fill out the form below to discuss any work opportunities</p>
            </div>
            <div className='bg-body-tertiary d-flex justify-content-center p-3' style={{ marginTop: "-20px" }}>
                <form onSubmit={sendEmail} className='w-100 max-w-75' ref={form}>
                    <div className="mb-3 d-flex justify-content-center">
                        <div style={{ width: "60%" }}>
                            <input required type="text" className="form-control text-center" placeholder='Your name required' id="exampleFormControlInput1" name="user_name"/>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <div style={{ width: "60%" }}>
                            <input required type="email" className="form-control text-center" placeholder='Your email required' id="exampleFormControlInput2" name="user_email" />
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <div style={{ width: "60%" }}>
                            <textarea required className="form-control text-center" id="exampleFormControlTextarea1" placeholder='Your message required' rows="3" name="message"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: "#ffc107" }}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;
