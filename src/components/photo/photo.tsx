import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PMIOnLoad } from "./../reducers/picsMegaInfo/PMI";
function Photo() {
  const [photo, setPhoto] = useState<any>(null);
  const pmi = useRef<any>();
  const { photoURl } = useSelector((state: any) => state.photo);
  const { contrast, opacity, saturate, blur, brightness, hue, sepia } =
    useSelector((state: any) => state.effects);

  const dispatch = useDispatch();

  if (photoURl !== null) {
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(photoURl);
  }

  const pic = pmi.current;
  if (pic !== undefined) {
    dispatch(PMIOnLoad(pic));
  }

  return (
    <>
      {photo !== null ? (
        <div className="overflow-auto relative h-fit mr-2 scrollbar scrollbar-thumb-blue-900 w-fit max-h-[85vh]">
          {/* frames  */}

          <img
            ref={pmi}
            className="h-fit w-fit"
            style={{
              opacity: `${opacity}`,
              filter: `contrast(${contrast}%) hue-rotate(${hue}deg) saturate(${saturate}) blur(${blur}px) brightness(${brightness}%) sepia(${sepia}%)`,
            }}
            src={photo}
            alt="yo"
          ></img>
        </div>
      ) : (
        <p className="text-[30px] mt-32 text-center w-full mb-5 text-red-600 truncate">
          no photo to show
        </p>
      )}
    </>
  );
}

export default Photo;
