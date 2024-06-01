import "./App.css";
import Stepper from "./components/Stepper";
import Navbar from "./components/Navbar";
import ServiceDetails from "./components/ServiceDetails";
import Location from "./components/Location";
import DateTime from "./components/DateTime";
import Payment from "./components/Payment";
import ReviewConfirm from "./components/ReviewConfirm";
import UserContext from "./UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const steps = [
    { content: "Service Details", body: <ServiceDetails /> },
    { content: "DateTime", body: <DateTime /> },
    { content: "Location", body: <Location /> },
    { content: "Payment", body: <Payment /> },
    { content: "Review Confirm", body: <ReviewConfirm /> },
  ];
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />

      <div className="p-2 ">
        <Stepper steps={steps} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
