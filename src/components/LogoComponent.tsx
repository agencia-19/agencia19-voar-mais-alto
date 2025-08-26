interface LogoProps {
  variant?: 'positive' | 'negative' | 'symbol' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const LogoComponent = ({ variant = 'positive', size = 'md', className = '' }: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'text-lg';
      case 'md': return 'text-2xl';
      case 'lg': return 'text-4xl';
      case 'xl': return 'text-6xl';
      default: return 'text-2xl';
    }
  };

  const getColorClasses = () => {
    switch (variant) {
      case 'negative':
        return 'text-white';
      case 'symbol':
        return 'text-primary';
      case 'text':
        return 'text-support-black';
      default:
        return 'text-support-black';
    }
  };

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className={`font-bold ${getSizeClasses()} ${getColorClasses()}`}>
          A
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className={`font-bold ${getSizeClasses()} ${variant === 'negative' ? 'text-white' : 'text-support-black'}`}>
        Agência
      </span>
      <span className={`font-bold ${getSizeClasses()} ml-2 text-primary`}>
        19
      </span>
    </div>
  );
};

export default LogoComponent;