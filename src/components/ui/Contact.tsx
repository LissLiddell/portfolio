'use client';
import { useState } from 'react';
import { FormData, FormStatus } from '../../types';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false,
      });
      
      setFormStatus({
        type: 'success',
        message: '¡Mensaje enviado correctamente! Te responderé pronto.'
      });
      
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-sora mb-8 text-center">
            Trabajemos <span className="text-[#D946EF]">juntos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-sora font-semibold mb-6">Hablemos de tu proyecto</h3>
              <p className="text-gray-300 mb-6">
                ¿Tienes una idea en mente? Me encanta colaborar en proyectos desafiantes 
                y crear experiencias digitales excepcionales.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">email@ejemplo.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Guadalajara, MX</span>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={submitForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1F1A2E] border border-gray-700 rounded-lg form-input text-white placeholder-gray-500 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#22D3EE] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1F1A2E] border border-gray-700 rounded-lg form-input text-white placeholder-gray-500 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#22D3EE] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1F1A2E] border border-gray-700 rounded-lg form-input text-white placeholder-gray-500 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#22D3EE] transition-colors"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1F1A2E] border border-gray-700 rounded-lg form-input text-white placeholder-gray-500 focus:outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#22D3EE] transition-colors resize-none"
                    placeholder="Cuéntame más sobre tu proyecto..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#7C3AED] bg-gray-700 border-gray-600 rounded focus:ring-[#7C3AED] focus:ring-2"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-300">
                    Acepto que mis datos sean procesados para responder a mi consulta
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full btn px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] disabled:bg-gray-600 rounded-lg text-white font-medium transition-all relative overflow-hidden"
                >
                  {formSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                
                {formStatus && (
                  <div className={`p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-900/20 border border-green-500 text-green-400' 
                      : 'bg-red-900/20 border border-red-500 text-red-400'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}