import React, { useState } from 'react';
import TextField from '../../components/Fields/TextField';
import FormHeader from './FormHeader';

interface FormValues {
  jobTitle: string
  companyName: string
  industry: string
  location: string
  remoteType: string
}

const StepOne: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    remoteType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <FormHeader title='Create a job' step='Step 1' />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <TextField
              label="Job title"
              name="jobTitle"
              placeholder="ex. UI UI Designer"
              value={formValues.jobTitle}
              onChange={handleChange}
              required
            />
            <TextField
              label="Company name"
              name="companyName"
              placeholder="ex. Google"
              value={formValues.companyName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Industry"
              name="industry"
              placeholder="ex. Information Technology"
              value={formValues.industry}
              onChange={handleChange}
              required
            />
            <div className="w-full sm:w-1/2 md:pr-6">
              <TextField
                label="Remote type"
                name="remoteType"
                placeholder="ex. Chennai"
                value={formValues.remoteType}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <TextField
                label="Location"
                name="location"
                placeholder="ex. In-office"
                value={formValues.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end mt-24">
            <button type="submit" className="bg-customBlue font-bold text-white rounded px-4 py-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
