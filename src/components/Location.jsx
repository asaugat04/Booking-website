import { useState, useContext } from "react";
import { Button } from "./ui/button";
import UserContext from "@/UserContext";
import DatePicker from "./ui/DatePicker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Location() {
  const [location, setLocation] = useState(null);
  const [date, setDate] = useState(new Date());

  const { user, setUser } = useContext(UserContext);
  //there is no location for setting location due to unavailability of google maps api.
  // ********************setUser({ ...user, location: location });****************************
  //the above line can be used to set the location in the user object.

  return (
    <div className="flex w-full min-h-96 md:w-3/5 flex-col m-4 md:border md:p-8 md:rounded-lg md:shadow-xl">
      <h1 className="text-lg mb-1 text-left w-full">
        Where do you need the service?
      </h1>
      <div>
        <Button variant="outline" className="w-fit m-1 rounded-full">
          Home
        </Button>
        <Button variant="outline" className="w-fit m-1 rounded-full">
          Office
        </Button>
        <Button variant="outline" className="w-fit m-1 rounded-full">
          Other
        </Button>
      </div>
      <div className="w-full h-96 y-10 border-2 p-9 text-sm">
        This is the location page. Here we will ask the user to enter the
        location using google maps api.
      </div>
      <div className="mt-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Save location</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup
              value={location}
              onValueChange={setLocation}
            >
              <DropdownMenuLabel>Save location as</DropdownMenuLabel>
              <DropdownMenuRadioItem value="home">Home</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="office">
                Office
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
