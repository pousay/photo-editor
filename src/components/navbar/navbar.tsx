import { useDispatch, useSelector } from "react-redux";
import { upload } from "../reducers/photo/photoSlice";
import Save from "./Save";

function Navbar() {
  const dispatch = useDispatch();
  const { photoURl: photo } = useSelector((state: any) => state.photo);

  return (
    <>
      <div className="w-[100%] z-10 mb-2 flex justify-between align-middle py-3 px-5 max-[400px]:px-2 text-white bg-blue-800">
        {/* title  */}
        <p className="text-center font-mono max-[400px]:pt-2 max-[400px]:text-[16px] text-xl pt-1">
          PHOTO EDITOR
        </p>

        <div className="flex gap-3">
          {photo !== null && <Save />}
          <input
            onChange={(e) => {
              if (e.target.files !== null) {
                dispatch(upload(e.target.files[0]));
              }
            }}
            className="hidden"
            id="uploadFile"
            type="file"
            name=""
          />
          <label
            className={`${
              photo !== null ? "pb-0 pt-2" : "pt-1"
            }  cursor-pointer border-dashed border-[1px] text-[14px] border-gray-400 px-3 flex gap-1`}
            htmlFor="uploadFile"
          >
            upload
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;
