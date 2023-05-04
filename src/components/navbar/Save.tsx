import { useSelector } from "react-redux";

function Save() {
  const { contrast, opacity, saturate, blur, brightness, hue, sepia } =
    useSelector((state: any) => state.effects);

  const { pic } = useSelector((state: any) => state.PMI);

  const saveImage = () => {
    console.log(pic.naturalWidth);

    const canvas = document.createElement("canvas")! as HTMLCanvasElement;
    canvas.width = pic.naturalWidth;
    canvas.height = pic.naturalHeight;

    console.log(canvas);
    const ctx: any = canvas.getContext("2d");

    ctx.filter = `brightness(${brightness}%) opacity(${opacity}) blur(${blur}px) sepia(${sepia}%) saturate(${saturate}) contrast(${contrast}%) hue-rotate(${hue}deg)`;

    ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = "image_edit.png";
    link.href = canvas.toDataURL();
    link.click();
  };
  return (
    <>
      <button
        disabled={
          contrast === 100 &&
          opacity === 1 &&
          brightness === 100 &&
          blur === 0 &&
          hue === 0 &&
          sepia === 0 &&
          saturate === 1
        }
        onClick={saveImage}
        className="flex text-[14px] disabled:opacity-40 disabled:cursor-not-allowed bg-blue-600 px-3 py-2 rounded-xl cursor-pointer"
      >
        save
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
      </button>
    </>
  );
}

export default Save;
