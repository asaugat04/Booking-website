import { useContext } from "react";
import UserContext from "@/UserContext";

export default function ALLInfoSideBox() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="border rounded-md shadow-md w-full flex flex-col mt-4 p-8  max-w-[25vw]">
      <h1 className="text-bold border-b-2 w-full text-xl mb-4 ">Summary</h1>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between">
          <p className="pr-4">No. of Cleaners</p>
          <p className="pl-6">{user?.noOfCleaners || "0"} cleaners</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="pr-4">No. of Hours</p>
          <p className="pl-6">{user?.cleaningHours || "0"} Hours</p>
        </div>
        {user?.cleaningFrequency && (
          <div className="flex flex-row justify-between">
            <p className="pr-4">Frequency</p>
            <p className="pl-6">{user?.cleaningFrequency} </p>
          </div>
        )}
        {user?.needMaterials && (
          <div className="flex flex-row justify-between">
            <p className="pr-4">Materials</p>
            <p className="pl-6">Yes </p>
          </div>
        )}
      </div>
      <h1 className="text-bold border-b-2 w-full text-xl mb-3 pb-2 mt-4 ">
        Date and time
      </h1>
      <div className="flex flex-col gap-1">
        {user?.date && (
          <div className="flex flex-row justify-between">
            <p className="pr-4">Date</p>
            <p className="pl-6">{user?.date?.toDateString()} </p>
          </div>
        )}
        {user?.time && (
          <div className="flex flex-row justify-between">
            <p className="pr-4">Time</p>
            <p className="pl-6">{user?.time} </p>
          </div>
        )}
      </div>
      <h1 className="text-bold border-b-2 w-full text-xl mb-4 pb-2 mt-4">
        Address
      </h1>
      <div className="flex flex-col">
        {user?.location && (
          <div className="flex flex-row justify-between">
            <p className="pr-4">Date</p>
            <p className="pl-6">{user?.location} </p>
          </div>
        )}
      </div>
      <h1 className="text-bold border-b-2 w-full text-xl mb-4 ">
        Payment Details
      </h1>
      <div className="flex flex-col">
        {user?.paymentMethod && (
          <div className="flex flex-row justify-between">
            <p className="pr-4">Payment Method</p>
            <p className="pl-6">
              {user?.paymentMethod == "cod"
                ? "Cash on Delivery"
                : "Credit Card"}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
