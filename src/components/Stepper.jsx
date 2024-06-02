import React, { useContext, useState } from "react";
import FooterBtns from "./FooterBtns";
import ServiceDesc from "./ServiceDesc";
import UserContext from "@/UserContext";
import toast, { Toaster } from "react-hot-toast";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { user } = useContext(UserContext);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      // console.log(user);
      //if validate function is available then validate and move to next step
      if (steps[currentStep].validate)
        if (steps[currentStep].validate(user)) setCurrentStep(currentStep + 1);
        else {
          toast.error("Fill in necessary details to proceed!", {
            duration: 600,
            style: {
              background: "rgba(90,90,90,0.4)",
              color: "#fff",
              backdropFilter: "blur(2px) grayscale(0.5)",
            },
          });
        }
      // else goto next step directly
      else setCurrentStep(currentStep + 1);
    }
  };

  const gotoPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToNthPreviousStep = (n) => {
    if (currentStep > n) {
      setCurrentStep(n);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
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
      <div className="flex flex-row justify-center gap-4">
        <div className="flex flex-col md:border md:rounded-lg md:shadow-xl min-h-96  md:max-w-[45vw] w-full md:w-3/5">
          {steps[currentStep].body}
        </div>
        <div className="detailsBlock hidden md:block ">
          {/* This helps us to not show description on last page as last page is the comformation page and all the details are shown in the comformation page */}
          {steps.length > currentStep + 1 && <ServiceDesc />}
        </div>
      </div>
      <FooterBtns prev={gotoPreviousStep} next={goToNextStep} />
    </>
  );
};

export default Stepper;
