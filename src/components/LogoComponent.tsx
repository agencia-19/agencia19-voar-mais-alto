import heroImage from "@/assets/logo-horizontal-negativo-PNG.png";


interface LogoProps {
  variant?: 'positive' | 'negative' | 'symbol' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const LogoComponent = ({ variant = 'positive', size = 'md', className = '' }: LogoProps) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={heroImage}
        alt="Agência 19"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LogoComponent;