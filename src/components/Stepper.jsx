import React, { useState } from "react";
import FooterBtns from "./FooterBtns";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <>
      <div className="stepperTabs flex flex-col items-center">
        <h1 className="text-3xl text-center mt-14 mb-1 hidden md:block">
          {steps[currentStep].content}
        </h1>
        <ul className="stepper m-0 w-full pl-6 p-3 border-y-2 mt-14 fixed bg-white md:relative md:mt-2 md:border-0 md:w-4/5 ">
          {steps.map((step, index) => (
            <li
              key={index}
              className="inline mr-3 flex flex-col justify-center "
            >
              <p
                className={
                  "stepperCircle " + (index == currentStep ? " active" : "")
                }
              ></p>
            </li>
          ))}
        </ul>
      </div>
      {/* this div is placed in the back side of fixed bars so we don't need to give margin to each component  */}
      <div className="w-full h-32 md:h-4"></div>
      {/* end of div */}
      <div className="flex flex-row justify-around">
        {steps[currentStep].body}
        <div className="detailsBlock hidden md:block">helkjlsajdlkfj</div>
      </div>
      <FooterBtns prev={goToPreviousStep} next={goToNextStep} />
    </>
  );
};

export default Stepper;
