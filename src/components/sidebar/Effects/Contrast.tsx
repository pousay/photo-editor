import { useDispatch, useSelector } from "react-redux";
import { contrast } from "../../reducers/effects/effectsSlice";

function Contrast() {
  const dispatch = useDispatch();

  const { contrast: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">Contrast {Opened && `(${Value}%)`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800 w-full"
            type="range"
            step="1"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(contrast(+e.target.value));
            }}
            max="200"
            min="0"
          />
        </>
      )}
    </div>
  );
}

export default Contrast;
