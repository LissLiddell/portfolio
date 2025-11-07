interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-dark-3 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
}