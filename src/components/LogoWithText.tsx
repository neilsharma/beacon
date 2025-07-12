import Logo from './Logo';

interface LogoWithTextProps {
  className?: string;
  logoScale?: string;
}

const LogoWithText = ({ className = "", logoScale }: LogoWithTextProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {logoScale ? (
        <div className={logoScale}>
          <Logo />
        </div>
      ) : (
        <Logo />
      )}
      <span className="text-2xl font-bold text-white">BEACON</span>
    </div>
  );
};

export default LogoWithText;