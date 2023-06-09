import React from 'react';

interface TextFieldProps {
  label?: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false
}) => {
  return (
    <div className="w-full mb-6">
      <label htmlFor={name} className="block text-sm text-left font-bold mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
