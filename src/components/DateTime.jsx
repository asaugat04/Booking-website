import { useState } from "react";
import { Button } from "./ui/button";
import DatePicker from "./ui/DatePicker";

export default function DateTime() {
  const [date, setDate] = useState(new Date());
  const [selectedtime, setSelectedTime] = useState("");
  return (
    <div className="flex w-full min-h-96 md:w-3/5 flex-col m-4 md:border md:p-8 md:rounded-lg md:shadow-xl">
      <h1 className="text-lg mb-1 text-left w-full">
        Pict a date comfortable for you
      </h1>
      <DatePicker date={date} setDate={setDate} />
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
            variant={time == selectedtime ? "outline" : "ghost"}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}
