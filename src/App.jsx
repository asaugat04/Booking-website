import "./App.css";
import Stepper from "./components/Stepper";
import Navbar from "./components/Navbar";
import ServiceDetails, {
  validateServiceDetails,
} from "./components/ServiceDetails";
import DateTime, { validateDateTime } from "./components/DateTime";
import Location, { validateLocation } from "./components/Location";
import Payment, { validatePayment } from "./components/Payment";
import ReviewConfirm from "./components/ReviewConfirm";
import UserContext from "./UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const steps = [
    {
      content: "Service Details",
      body: <ServiceDetails />,
      validate: validateServiceDetails,
    },
    { content: "DateTime", body: <DateTime />, validate: validateDateTime },
    { content: "Location", body: <Location />, validate: validateLocation },
    { content: "Payment", body: <Payment />, validate: validatePayment },
    { content: "Review Confirm", body: <ReviewConfirm /> },
  ];
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />

      <div className="p-2 md:p-0 ">
        <Stepper steps={steps} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
