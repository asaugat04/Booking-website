import React, { useEffect, useState } from "react";
import UserContext from "@/UserContext";
import { Button } from "./ui/button";

export default function ServiceDetails() {
  const { user, setUser } = React.useContext(UserContext);
  const [activeCleanerButton, setActiveCleanerButton] = useState(1);
  const [activeHoursButton, setActiveHoursButton] = useState(1);
  const [activeFrequencyButton, setActiveFrequencyButton] = useState("");
  const [activeMaterialButton, setActiveMaterialButton] = useState("");
  const [specialInstruction, setSpecialInstruction] = useState("");

  return (
    <div className="flex flex-col m-4 md:w-3/5 md:border md:p-8 md:rounded-lg md:shadow-xl">
      <h1 className="text-lg mb-1">Home Cleaning</h1>
      <p className="text-sm">
        Fill out the booking form, and we'll pair you with the perfect cleaner
        for a home that radiates cleanliness and comfort.
      </p>
      <h2 className="mt-2 text-lg">How many cleaners do you need?</h2>
      <div>
        {[1, 2, 3, 4].map((number) => (
          <Button
            key={number}
            variant="outline"
            className={`hover:bg-initial hover:text-initial cleanerbtn border-2 rounded-lg py-2 px-7 mx-2 ${
              activeCleanerButton === number
                ? "bg-indigo-500 text-white shadow-sm"
                : ""
            }`}
            onClick={() => {
              setActiveCleanerButton(number);
              setUser({
                ...user,
                noOfCleaners: number,
              });
            }}
          >
            {number}
          </Button>
        ))}
      </div>
      <h2 className="mt-2 mb-1 text-lg">How many hours should they stay?</h2>
      <div className="flex flex-row">
        {[1, 2, 3].map((number) => (
          <p key={number} className="stepperDots flex flex-col">
            <Button
              onClick={() => {
                setActiveHoursButton(number);
                setUser({
                  ...user,
                  cleaningHours: number,
                });
              }}
              variant="outline"
              className={`hover:bg-initial hover:text-initial block border-2 rounded-lg hoursbtn py-2 px-7 mx-2 ${
                number === activeHoursButton ? "bg-indigo-500 text-white" : ""
              }`}
            >
              {number}
            </Button>
            <span className="text-xs text-center"> AED {40 - number}/hr </span>
          </p>
        ))}
      </div>

      <h2 className="mt-2 text-lg">How often do you need cleaning?</h2>
      <div className="FrequencyTab flex flex-col">
        {["Once", "Weekly", "Multiple times a week"].map((frequency) => (
          <button
            key={frequency}
            onClick={() => {
              setActiveFrequencyButton(frequency);
              setUser({
                ...user,
                cleaningFrequency: frequency,
              });
            }}
            className={`hover:bg-initial hover:text-initial  border text-sm rounded-lg py-2 px-7 mx-2 my-3 ${
              activeFrequencyButton === frequency ? "border-indigo-500" : ""
            }`}
          >
            <ul className="list-disc text-left list-inside">
              <b>{frequency}</b>
              {frequency === "Once" && <li>Book a one time session</li>}
              {frequency === "Weekly" && (
                <>
                  <li>Get the same cleaner each time</li>
                  <li>Re-schedule easily through the app</li>
                </>
              )}
              {frequency === "Multiple times a week" && (
                <>
                  <li>Get the same cleaner each time</li>
                  <li>Re-schedule easily through the app</li>
                </>
              )}
            </ul>
          </button>
        ))}
      </div>

      <h2 className="pt-2 text-lg">Do you need cleaning materials?</h2>
      <div>
        <p className="text-xs pl-1">
          An additional charge of AED 10/hr applies for cleaning materials.
        </p>
        <p className="flex flex-row">
          {["Yes", "No"].map((option) => (
            <button
              key={option}
              variant={activeMaterialButton === option ? "" : "outline"}
              onClick={() => {
                setActiveMaterialButton(option);
                setUser({
                  ...user,
                  needMaterials: option === "Yes",
                });
              }}
              className={`hover:bg-initial hover:text-initial block border-2 rounded-lg hoursbtn py-2 px-7 mx-2 my-2 ${
                activeMaterialButton === option
                  ? "bg-indigo-500 text-white"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </p>
      </div>

      <h2 className="text-lg pb-2">Do you have any special instructions?</h2>
      <textarea
        style={{ resize: "none" }}
        className="border-2 rounded-lg p-2 w-full"
        value={specialInstruction}
        onChange={(e) => {
          setSpecialInstruction(e.target.value);
          setUser({
            ...user,
            instruction: e.target.value,
          });
        }}
        placeholder="Example: Please clean the windows and the balcony."
      ></textarea>
    </div>
  );
}
