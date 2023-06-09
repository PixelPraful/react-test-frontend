import React from 'react';

interface CardProps {
  imageSrc: string
  title: string
  text: string
  location: string
  jobType?: string
  experience?: string
  salary?: string
  employees?: string
  buttonLabel: string
  onButtonClick: () => void
  buttonSx: string
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  text,
  location,
  jobType,
  experience,
  salary,
  employees,
  buttonLabel,
  onButtonClick,
  buttonSx
}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg px-6 py-5">
      <div className="flex">
        <img className="w-12 h-12 rounded-sm" src={imageSrc} alt="Card" />
        <div className="px-2">
          <div className="font-bold text-xl mb-1">{title}</div>
          <p className="text-gray-700 text-base font-bold">{text}</p>
          <p className="text-gray-700 text-base">{location}</p>
          <div className="mt-4">
            {jobType && <p className="text-gray-700 text-base font-bold">{jobType}</p>}
            {experience && <p className="text-gray-700 text-base font-bold">Experience ({experience})</p>}
            {salary && <p className="text-gray-700 text-base font-bold">INR (₹) {salary}</p>}
            {employees && <p className="text-gray-700 text-base font-bold">{employees} employees</p>}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className={`font-bold py-2 px-4 rounded ${buttonSx}`}
              onClick={onButtonClick}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
