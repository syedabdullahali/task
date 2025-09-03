import React from "react";

type SpinnerProps = {
  size?: number;       
  colorClass?: string;
  className?: string;  
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 20,
  colorClass = "border-blue-500",
  className = "",
}) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-t-transparent ${colorClass} ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Spinner;
