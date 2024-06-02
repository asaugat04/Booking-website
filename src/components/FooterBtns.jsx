import UserContext from "@/UserContext";
import { useContext } from "react";
import ServiceDesc, { calculatePrice } from "./ServiceDesc";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function FooterBtns({ prev, next }) {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div className="w-full h-20">
        {/* This is a placeholder div so that the content doesnot get hidden by the footer component */}
      </div>
      <div className="fixed bottom-0 w-full pt-3 pb-5 bg-slate-100 rounded-t-lg">
        <div className="flex  flex-row justify-between mx-auto w-11/12 mt-4">
          <div>
            <Button
              className="hidden md:block"
              variant="outline"
              onClick={prev}
            >
              Previous
            </Button>
            <Drawer>
              <DrawerTrigger>
                <div className="flex flex-row items-center text-lg font-bold md:hidden">
                  NRs. {calculatePrice(user)?.total}
                  <i className="pl-1 inline-block text-slate-500 fa-solid fa-sort-up"></i>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Service Details</DrawerTitle>
                  <DrawerClose />
                </DrawerHeader>
                <DrawerDescription>
                  <ServiceDesc />
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
          </div>
          <Button variant="outline" onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
