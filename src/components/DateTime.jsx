import { useState, useContext, useEffect } from "react";
import { Button } from "./ui/button";
import DatePicker from "./ui/DatePicker";
import UserContext from "@/UserContext";

export default function DateTime() {
  const [date, setDate] = useState(new Date());
  const [selectedtime, setSelectedTime] = useState("");

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1 className="text-lg mb-1 text-left w-full">
        Pict a date comfortable for you
      </h1>
      <DatePicker
        onChange={() => console.log("hello")}
        date={date}
        setDate={(date) => {
          setDate(date);
          setUser({ ...user, date: date });
        }}
      />
      <h1 className="text-lg py-3 text-left w-full">
        At what time do you want us to arrive?
      </h1>
      <div className="buttongroup flex flex-row flex-wrap gap-3">
        {[
          "2:00 PM-2:30 PM",
          "2:30 PM-2:50 PM",
          "2:50 PM-3:00 PM",
          "3:00 PM-:20 PM",
        ].map((time, index) => (
          <Button
            key={index}
            className={`w-2/5 ${time == selectedtime ? "bg-slate-200" : ""}`}
            variant="outline"
            onClick={() => {
              setSelectedTime(time);
              setUser({ ...user, time: time });
            }}
          >
            {time}
          </Button>
        ))}
      </div>
    </>
  );
}
