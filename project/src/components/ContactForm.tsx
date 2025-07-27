// ContactForm.tsx
import emailjs from '@emailjs/browser';
import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gmdeqnz',      
        'template_6apxnqm',     
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '9ADwzlgoLeDIu7KP1'     
      );
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="w-full p-3 bg-gray-800 border border-blue-500 rounded-lg text-white"
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full p-3 bg-gray-800 border border-blue-500 rounded-lg text-white"
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
        required
        rows={4}
        className="w-full p-3 bg-gray-800 border border-blue-500 rounded-lg text-white"
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 disabled:opacity-50"
      >
        {isSubmitting ? 'SENDING...' : '🚀 SEND MESSAGE'}
      </button>
    </form>
  );
};

export default ContactForm;