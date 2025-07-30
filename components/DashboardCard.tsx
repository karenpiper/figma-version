import { ReactNode } from 'react';

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
}

export function DashboardCard({ 
  children, 
  className = "", 
  gradient = false, 
  hover = true 
}: DashboardCardProps) {
  const baseClasses = "rounded-2xl border border-border backdrop-blur-sm overflow-hidden";
  const backgroundClasses = gradient 
    ? "bg-gradient-to-br from-primary/10 via-card to-secondary/20" 
    : "bg-card text-card-foreground"; // Added text-card-foreground for proper contrast
  const hoverClasses = hover 
    ? "transition-all duration-300 hover:border-border/50 hover:shadow-lg hover:shadow-primary/5" 
    : "";
  
  return (
    <div className={`${baseClasses} ${backgroundClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}