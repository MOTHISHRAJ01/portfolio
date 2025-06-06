import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Master Of Computer Application',
      institution: 'Dr.MGR Education And Research Institute, Chennai',
      grades: 'Grade: 64%',
      year: ' [2021-2023]',
      desc: "I am currently pursuing a Master's degree in Computer Application at Dr.MGR University,Chennai. I have completed 4 semesters and have a CGPA of 6.4",
    },
    {
      logo: "logo-play",
      degree: 'Bachelor Of Computer Application',
      institution: 'Bhaktashram Ashramshala, Navsari',
      grades: 'Grade: 74.1% ',
      year: ' [2017-2020]',
      desc: "I am currently pursuing a Bachelo's degree in Computer Application at University Of Madras ,Chennai. I have completed 6 semesters and have a CGPA of 7.3",       
    },
    {
      logo: "logo-play",
      degree: 'HSC',
      institution: 'Vidya mandhir Matriculation Higher Secondary School, Ponneri',
      grades: 'Grade: 70.1% ',
      year: ' [2016]',
      desc: "I completed my class 12 high school education at vidya mandir Matriculation School, Ponneri, where I studied Computer Science.",       
    },
  ];

  return (
    <div id="education" className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((education, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={education.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{education.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{education.institution}</div>
              <div className="text-base text-gray-500">{education.grades}</div>
              <div className="text-base text-gray-500">{education.year}</div>
            </div>
            <p className="text-gray-700">{education.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
