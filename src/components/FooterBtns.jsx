export default function FooterBtns({ prev, next }) {
  return (
    <div className="fixed bottom-0 w-full ">
      <div className="flex  flex-row justify-around mt-4">
        <button onClick={prev}>prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
