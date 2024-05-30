import { Button } from "./ui/button";

export default function FooterBtns({ next }) {
  return (
    <div>
      <div className="w-full h-20">
        {/* This is a placeholder div so that the content doesnot get hidden by the footer component */}
      </div>
      <div className="fixed bottom-0 w-full pt-3 pb-5 bg-slate-100 rounded-t-lg">
        <div className="flex  flex-row justify-end w-11/12 mt-4">
          <Button variant="outline" onClick={next}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
