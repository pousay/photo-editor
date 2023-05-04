import { useDispatch, useSelector } from "react-redux";
import { saturate } from "../../reducers/effects/effectsSlice";

function Saturate() {
  const dispatch = useDispatch();

  const { saturate: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">saturate {Opened && `(${Value})`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800 w-full"
            type="range"
            step="1"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(saturate(+e.target.value));
            }}
            max="10"
            min="1"
          />
        </>
      )}
    </div>
  );
}

export default Saturate;
