import emailjs from 'emailjs-com';


const Contact = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rw0cehp', 'template_4csgw0c', e.target, 'user_lpXswi6AE97WaDYJffa4O')
            .then((result) => {
                alert(" Email Send Successfully");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }



    return (
        <div style={{ backgroundColor: '#080808ec', height: '150vh' }}>

            <div className="container">
                <div className="row">
                    <div className="col-md-10 mt-5">
                        <form onSubmit={sendEmail}>

                            <div className="row pt-3 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" required />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="6" placeholder="Your message .." name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto" >
                                    <input style={{ borderRadius: "20px", height: '50px', background: 'red', color: '#fff' }} type="submit" className="btn text-light More-skil w-100" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;