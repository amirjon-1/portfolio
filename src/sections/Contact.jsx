import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef= useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm]= useState({
        name: '',
        email: '',
        message: ''
    })  


    const handleChange= ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit= async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send('service_bk10vl7', 'template_g4csijb',
            {from_name: form.name,
            to_name: 'Amirjon',
        from_email: form.email,
    to_email: "amirjon5321@gmail.com",
    message: form.message},
    'oGA_zp1BnFbZFEu9o'
            )
            setLoading(false);
            alert("Message Has Been Sent");

            setForm({
                name: '',
                email: '',
                message: ''
            });
        }catch (error){
            setLoading(false);

            console.log(error);
            alert("Something went wrong! Please Try Again");
        }
        
    }



    return (
        <section className='c-space my-20' id="contact">


            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <div className='contact-container'>
                 <h3 className='head-text'>Contact Me</h3>
                 <p className='text-lg text-black mt-3'>I'm here to help you bring your ideas to life.</p>

                 <form ref= {formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'> Name</span>
                        <input type='text' name="name" value= {form.name} onChange={handleChange} required className='field-input' placeholder='Your Name'></input>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'> Email</span>
                        <input type='email' name="email" value= {form.email} onChange={handleChange} required className='field-input' placeholder='YourEmail@gmail.com'></input>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'> Message</span>
                        <textarea name="message" value= {form.message} onChange={handleChange}  rows={5} required className='field-input' placeholder='Your Message'></textarea>
                    </label>

                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading ? 'Sending... ' : 'Send Message'}
                        <img src ="/assets/arrow-up.png" alt='arrow-up' className='field-btn_arrow'/>
                    </button>

                 </form>
                </div>
            </div>

        </section>
    )
}

export default Contact