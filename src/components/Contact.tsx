import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkrnjnr");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your message has been sent successfully. We'll get back to you within 24 hours to discuss how AI can transform your agency.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white border border-gray-300 p-8 rounded-xl max-w-lg w-full shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Our team will review your project details and reach out to schedule a consultation.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-yellow-500 border border-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect with us
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss how AI can enhance your government operations. Our team is ready to help you navigate the future of public service.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Form */}
          <div className="bg-white border border-gray-300 p-8 rounded-xl max-w-lg w-full shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  placeholder="Your full name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  placeholder="your.email@agency.gov"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="agencyCompany" className="block text-sm font-medium text-gray-700 mb-2">
                  Agency/Company
                </label>
                <input
                  type="text"
                  id="agencyCompany"
                  name="agencyCompany"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  placeholder="Your agency or company"
                />
                <ValidationError 
                  prefix="Agency/Company" 
                  field="agencyCompany"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  placeholder="Tell us about your AI project needs..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-yellow-500 border border-yellow-500 text-black px-6 py-4 rounded-lg font-semibold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;