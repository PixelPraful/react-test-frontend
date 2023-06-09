import React from 'react';
import StepOne from '../CreateJob/StepOne';
import StepTwo from '../CreateJob/StepTwo';
import Card from '../../components/Card';

const Home = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly gap-4 m-8">
        <StepOne />
        <StepTwo />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-4 m-8">
        <Card
          imageSrc="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
          title="UX UI Designer"
          text="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu India (In-office)"
          jobType="Part-Time (9:00 am - 5.00 pm IST)"
          experience="1 - 2 years"
          salary="30,000 - 60,000 / Month"
          employees="51-200"
          buttonLabel="Apply Now"
          buttonSx="bg-customBlue text-white"
          onButtonClick={() => {}}
        />
        <Card
          imageSrc="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
          title="UX UI Designer"
          text="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu India (In-office)"
          jobType="Part-Time (9:00 am - 5.00 pm IST)"
          experience="1 - 2 years"
          salary="30,000 - 60,000 / Month"
          employees="51-200"
          buttonLabel="External Apply"
          buttonSx="border border-customBlue text-customBlue hover:bg-customBlue hover:text-white"
          onButtonClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Home;
