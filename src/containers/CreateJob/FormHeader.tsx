import React from 'react';

interface FormHeaderProps {
  title?: string
  step?: string
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, step }) => {
  return (
    <div className="flex justify-between mb-6">
      <h1 className="text-xl font-bold">{title}</h1>
      <h1 className="text-xl font-bold">{step}</h1>
    </div>
  );
};

export default FormHeader;
