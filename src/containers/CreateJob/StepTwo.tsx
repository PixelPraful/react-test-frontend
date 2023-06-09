import React, { useState } from 'react';
import TextField from '../../components/Fields/TextField';
import RadioField from '../../components/Fields/RadioField';
import FormHeader from './FormHeader';

interface FormValues {
  minExp: string
  maxExp: string
  minSal: string
  maxSal: string
  totalEmp: string
  applyType: string
}

const StepTwo: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    minExp: '',
    maxExp: '',
    minSal: '',
    maxSal: '',
    totalEmp: '',
    applyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission or validation logic here
    console.log(formValues);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-xl p-8 rounded-lg shadow-md mt-8">
        <FormHeader title='Create a job' step='Step 2' />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:pr-6">
              <TextField
                label="Experience"
                name="minExp"
                placeholder="Minimum"
                value={formValues.minExp}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:mt-5 sm:w-1/2">
              <TextField
                label=""
                name="maxExp"
                placeholder="Maximum"
                value={formValues.maxExp}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2 md:pr-6">
              <TextField
                label="Salary"
                name="minSal"
                placeholder="Minimum"
                value={formValues.minSal}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:mt-5 sm:w-1/2">
              <TextField
                label=""
                name="maxSal"
                placeholder="Maximum"
                value={formValues.maxSal}
                onChange={handleChange}
              />
            </div>
            <TextField
              label="Total employee"
              name="totalEmp"
              placeholder="ex. 100"
              value={formValues.totalEmp}
              onChange={handleChange}
              required
            />
            <div className="w-full mb-6">
              <label className="block text-sm text-left font-bold mb-1">Apply type</label>
              <div className="flex gap-4">
                <RadioField
                  label="Quick apply"
                  name="applyType"
                  value="quick"
                  checked={formValues.applyType === 'quick'}
                  onChange={handleRadioChange}
                />
                <RadioField
                  label="External apply"
                  name="applyType"
                  value="external"
                  checked={formValues.applyType === 'external'}
                  onChange={handleRadioChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-24">
            <button type="submit" className="bg-customBlue font-bold text-white rounded px-4 py-2">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
