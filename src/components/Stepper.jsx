import React, { useState } from "react";
import FooterBtns from "./FooterBtns";
import ServiceDesc from "./ServiceDesc";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToNthPreviousStep = (n) => {
    if (currentStep > n) {
      setCurrentStep(n);
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
              onClick={() => goToNthPreviousStep(index)}
              key={index}
              className="inline mr-3 flex flex-col justify-center "
            >
              <p
                className={
                  "stepperCircle bg-slate-300 text-xs" +
                  (index <= currentStep
                    ? " active border-4 border-slate-500"
                    : "")
                }
              >
                {index < currentStep ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  ""
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* this div is placed in the back side of fixed bars so we don't need to give margin to each component  */}
      <div className="w-full h-32 md:h-4"></div>
      {/* end of div */}
      <div className="flex flex-row justify-center ">
        <div className="flex w-full min-h-96 md:w-3/5 flex-col m-4 md:border md:p-8 md:rounded-lg md:shadow-xl md:max-w-[45vw]">
          {steps[currentStep].body}
        </div>
        <div className="detailsBlock hidden md:block ">
          <ServiceDesc />
        </div>
      </div>
      <FooterBtns next={goToNextStep} />
    </>
  );
};

export default Stepper;
