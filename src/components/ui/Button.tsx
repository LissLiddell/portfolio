interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  href,
  onClick 
}: ButtonProps) {
  const baseClasses = 'btn px-6 py-3 rounded-lg font-medium transition-all';
  
  const variantClasses = {
    primary: 'bg-violet-600 hover:bg-violet-700 text-white',
    secondary: 'bg-transparent border-2 border-violet-600 hover:border-violet-300 text-white'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}