import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_bk10vl7', 
                'template_g4csijb',
                {
                    from_name: form.name,
                    to_name: 'Amirjon',
                    from_email: form.email,
                    to_email: "amirjon5321@gmail.com",
                    message: form.message
                },
                'oGA_zp1BnFbZFEu9o'
            )
            setLoading(false);
            alert("Message Has Been Sent");
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong! Please Try Again");
        }
    }

    return (
        <section className='c-space my-32' id="contact">
            <div className='max-w-2xl mx-auto'>
                <h2 className='text-4xl font-semibold text-black mb-4'>Contact Me</h2>
                <p className='text-lg text-gray-600 mb-12'>I'm here to help you bring your ideas to life.</p>

                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-6'>
                    <label className='flex flex-col space-y-2'>
                        <span className='text-sm font-medium text-black'>Name</span>
                        <input 
                            type='text' 
                            name="name" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                            className='w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black' 
                            placeholder='Your Name'
                        />
                    </label>
                    <label className='flex flex-col space-y-2'>
                        <span className='text-sm font-medium text-black'>Email</span>
                        <input 
                            type='email' 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                            className='w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black' 
                            placeholder='your.email@example.com'
                        />
                    </label>
                    <label className='flex flex-col space-y-2'>
                        <span className='text-sm font-medium text-black'>Message</span>
                        <textarea 
                            name="message" 
                            value={form.message} 
                            onChange={handleChange} 
                            rows={6} 
                            required 
                            className='w-full bg-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black resize-none' 
                            placeholder='Your Message'
                        />
                    </label>

                    <button 
                        className='w-full bg-black text-white px-6 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed' 
                        type='submit' 
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                        {!loading && <img src="/assets/arrow-up.png" alt='arrow-up' className='w-3 h-3 brightness-0 invert'/>}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact