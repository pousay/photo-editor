import { useDispatch, useSelector } from "react-redux";
import { brightness } from "../../reducers/effects/effectsSlice";

function Brightness() {
  const dispatch = useDispatch();

  const { brightness: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">brightness {Opened && `(${Value}%)`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800 w-full"
            type="range"
            step="1"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(brightness(+e.target.value));
            }}
            max="200"
            min="0"
          />
        </>
      )}
    </div>
  );
}

export default Brightness;
