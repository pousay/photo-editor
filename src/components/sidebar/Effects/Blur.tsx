import { useDispatch, useSelector } from "react-redux";
import { blur } from "../../reducers/effects/effectsSlice";

function Blur() {
  const dispatch = useDispatch();

  const { blur: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">blur {Opened && `(${Value})`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800 w-full"
            type="range"
            step="1"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(blur(+e.target.value));
            }}
            max="10"
            min="0"
          />
        </>
      )}
    </div>
  );
}

export default Blur;
