import { useState } from "react";
import { Button } from "./ui/button";
import DatePicker from "./ui/DatePicker";

export default function Location() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex w-full min-h-96 md:w-3/5 flex-col m-4 md:border md:p-8 md:rounded-lg md:shadow-xl">
      <h1 className="text-lg mb-1 text-left w-full">location</h1>
    </div>
  );
}
