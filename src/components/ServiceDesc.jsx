import { useContext, useEffect, useState } from "react";
import UserContext from "@/UserContext";

let calculatePrice = (user) => {
  let ratePercleaner = 10;
  let ratePerHour = 10;
  let price = 0;
  if (user?.noOfCleaners) {
    price += user.noOfCleaners * 10;
  }
  if (user?.cleaningHours) {
    price += user.cleaningHours * 10;
  }
  if (user?.cleaningFrequency) {
    price += user.cleaningFrequency === "weekly" ? 10 : 20;
  }
  if (user?.needMaterials) {
    price += 10;
  }
  return {
    serviceCharges: price,
    vat: price * 0.1,
    total: price + price * 0.1,
  };
};

export default function ALLInfoSideBox({ className = "" }) {
  const { user } = useContext(UserContext);
  let [calculatedPrice, setCalculatedPrice] = useState({});

  useEffect(() => {
    setCalculatedPrice(calculatePrice(user));
    console.log(className);
  }, [user]);

  return (
    <div
      className={
        "border rounded-md shadow-md w-full flex flex-col mt-4 p-8  min-w-[25vw] md:sticky md:top-16" +
        className
      }
    >
      <h1 className="text-bold border-b-2 w-full text-xl mb-4 ">Summary</h1>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between">
          <p className="pr-4 text-sm">No. of Cleaners</p>
          <p className="pl-6 text-sm">{user?.noOfCleaners || "0"} cleaners</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="pr-4 text-sm">No. of Hours</p>
          <p className="pl-6 text-sm">{user?.cleaningHours || "0"} Hours</p>
        </div>
        {user?.cleaningFrequency && (
          <div className="flex flex-row justify-between">
            <p className="pr-4 text-sm">Frequency</p>
            <p className="pl-6 text-sm">{user?.cleaningFrequency} </p>
          </div>
        )}
        {user?.needMaterials && (
          <div className="flex flex-row justify-between">
            <p className="pr-4 text-sm">Materials</p>
            <p className="pl-6 text-sm">Yes </p>
          </div>
        )}
      </div>
      <h1 className="text-bold border-b-2 w-full text-xl mb-3 pb-2 mt-4 ">
        Date and time
      </h1>
      <div className="flex flex-col gap-1">
        {user?.date && (
          <div className="flex flex-row justify-between">
            <p className="pr-4 text-sm">Date</p>
            <p className="pl-6 text-sm">{user?.date?.toDateString()} </p>
          </div>
        )}
        {user?.time && (
          <div className="flex flex-row justify-between">
            <p className="pr-4 text-sm">Time</p>
            <p className="pl-6 text-sm">{user?.time} </p>
          </div>
        )}
      </div>
      <h1 className="text-bold border-b-2 w-full text-xl mb-4 pb-2 mt-4">
        Address
      </h1>
      <div className="flex flex-col">
        {user?.location && (
          <div className="flex flex-row justify-between">
            <p className="pr-4 text-sm">Date</p>
            <p className="pl-6 text-sm">{user?.location} </p>
          </div>
        )}
      </div>
      <h1 className="text-bold border-b-2 w-full text-xl mb-3 pb-2 mt-4 ">
        Payment Details
      </h1>
      <div className="flex flex-col">
        {user?.paymentMethod && (
          <div className="flex flex-row justify-between">
            <p className="pr-4 text-sm">Payment Method</p>
            <p className="pl-6 text-sm">
              {user?.paymentMethod == "cod"
                ? "Cash on Delivery"
                : "Credit Card"}{" "}
            </p>
          </div>
        )}
        {calculatedPrice && (
          <>
            <div className="flex flex-row justify-between">
              <p className="pr-4 text-sm">Service Charge</p>
              <p className="pl-6 text-sm">
                {calculatedPrice.serviceCharges} AED
              </p>
            </div>
            <div className="flex flex-row justify-between border-t-2 mt-5">
              <p className="pr-4 text-sm ">Total</p>
              <p className="pl-6 text-sm">{calculatedPrice.total} </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export { calculatePrice };
