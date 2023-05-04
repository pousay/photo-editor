interface props {
  toggleSettings: () => any;
  opened: boolean;
}

function Toggler(props: props) {
  return (
    <>
      <div
        onClick={() => props.toggleSettings()}
        className="w-8 h-8 mt-1 ml-[17px] mb-10 flex flex-col cursor-pointer justify-center gap-2 text-white"
      >
        <div
          className={`w-full transition-all duration-200 h-[2px] bg-white ${
            props.opened ? "rotate-[130deg]" : ""
          }`}
        ></div>
        <div
          className={`w-full transition-all duration-200 h-[2px] bg-white ${
            props.opened ? "rotate-[50deg] mt-[-10px]" : ""
          }`}
        ></div>
      </div>
    </>
  );
}

export default Toggler;
