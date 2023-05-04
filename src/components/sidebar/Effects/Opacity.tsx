import { useDispatch, useSelector } from "react-redux";
import { opacity } from "../../reducers/effects/effectsSlice";

function Opacity() {
  const dispatch = useDispatch();

  const { opacity: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">opacity {Opened && `(${Value})`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800  w-full"
            type="range"
            step="0.01"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(opacity(+e.target.value));
            }}
            max="1"
            min="0"
          />
        </>
      )}
    </div>
  );
}

export default Opacity;
