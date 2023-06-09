import React from 'react';

interface RadioFieldProps {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioField: React.FC<RadioFieldProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <div className="flex items-center mb-6">
      <input
        type="radio"
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label className="text-sm" htmlFor={name}>{label}</label>
    </div>
  );
};

export default RadioField;
