import { useDispatch, useSelector } from "react-redux";
import { RESET } from "../../reducers/effects/effectsSlice";

function Reset() {
  const dispatch = useDispatch();
  const { photoURl: photo } = useSelector((state: any) => state.photo);

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <input
          onClick={() => {
            dispatch(RESET());
          }}
          disabled={photo === null}
          className={`disabled:opacity-40 disabled:cursor-not-allowed mt-5 bg-blue-800 px-3 py-2 rounded-xl cursor-pointer`}
          type="button"
          value="reset"
        />
      </div>
    </>
  );
}

export default Reset;
