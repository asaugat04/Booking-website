import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CardImage from "../assets/card.png";

export default function Payment() {
  const [paymentType, setPaymentType] = useState("card");
  return (
    <div className="flex w-full min-h-96 md:w-3/5 flex-col m-4 md:border md:p-8 md:rounded-lg md:shadow-xl">
      <h1 className="text-lg mb-1 text-left w-full">
        Where do you need the service?
      </h1>
      <p className="text-xs italic">
        You pay only after the service is completed.
      </p>
      <div className="payment-type">
        <div className="card w-full">
          <RadioGroup
            value={paymentType}
            defaultValue="cod"
            onValueChange={(e) => setPaymentType(e)}
          >
            <Label htmlFor="card">
              <div className="flex flex-col items-left gap-2 space-x-2 border-2 p-1 py-3 rounded-xl">
                <div className="flex flex-row gap-x-3 ">
                  <RadioGroupItem className="" value="card" id="card" />
                  <div>Credit Card</div>
                </div>
                <div
                  className={`${
                    paymentType == "card" ? "" : "hidden"
                  } hiding-card-div text-xs pl-6 flex flex-col items-center w-full gap-x-2 md:flex-row`}
                >
                  <div className="card-left flex flex-row">
                    <div className="cardPicture w-full md:w-full">
                      <img className="rounded-lg " src={CardImage} alt="card" />
                      <div className="flex-row hidden md:flex w-full justify-center">
                        <img
                          src="https://img.icons8.com/color/48/000000/visa.png"
                          alt="visa"
                          className="w-3/12"
                        />
                        <img
                          src="https://img.icons8.com/color/48/000000/mastercard.png"
                          alt="mastercard"
                          className="w-3/12"
                        />
                        <img
                          src="https://img.icons8.com/color/48/000000/amex.png"
                          alt="amex"
                          className="w-3/12"
                        />
                      </div>
                      <p className="text-left text-xs">
                        AED 1 will be reserved then released to confirm your
                        card.
                      </p>
                    </div>
                  </div>
                  <div className="card-right"></div>
                </div>
              </div>
            </Label>

            <Label htmlFor="cod">
              <div className="flex items-center space-x-2 border-2 p-1 py-3 rounded-xl">
                <RadioGroupItem value="cod" id="cod" />
                Cash on Delivery
              </div>
            </Label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
