import { useDispatch, useSelector } from "react-redux";
import { hue } from "../../reducers/effects/effectsSlice";

function Hue() {
  const dispatch = useDispatch();

  const { hue: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">hue {Opened && `(${Value}deg)`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800  w-full"
            type="range"
            step="1"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(hue(+e.target.value));
            }}
            max="360"
            min="0"
          />
        </>
      )}
    </div>
  );
}

export default Hue;
