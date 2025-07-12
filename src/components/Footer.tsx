import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo Section */}
          <div className="flex-[1] flex items-center justify-center md:justify-start">
            <div className="flex items-center space-x-3">
              <div className="scale-125">
                <Logo />
              </div>
              <span className="text-2xl font-bold text-white">BEACON</span>
            </div>
          </div>
          
          {/* Navigation Sections */}
          <div className="flex-[3] flex flex-col md:flex-row gap-8 md:gap-12 justify-end">
            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-sm text-gray-400 hover:text-white transition-colors">AI Strategy</a>
                <a href="#services" className="block text-sm text-gray-400 hover:text-white transition-colors">Secure Implementation</a>
                <a href="#services" className="block text-sm text-gray-400 hover:text-white transition-colors">Data Intelligence</a>
                <a href="#services" className="block text-sm text-gray-400 hover:text-white transition-colors">Team Building</a>
              </div>
            </div>
            
            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <div className="space-y-2">
                <a href="#team" className="block text-sm text-gray-400 hover:text-white transition-colors">Leadership Team</a>
                <a href="#values" className="block text-sm text-gray-400 hover:text-white transition-colors">Our Values</a>
                <a href="/careers" className="block text-sm text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#contact" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Compliance */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">Compliance</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">ISO 9001:2015</p>
                <p className="text-sm text-gray-400">FedRAMP Ready</p>
                <p className="text-sm text-gray-400">CMMI Level 3</p>
                <p className="text-sm text-gray-400">GSA Schedule</p>
              </div>
            </div>
            
            {/* Legal */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;