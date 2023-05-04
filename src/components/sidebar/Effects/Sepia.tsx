import { useDispatch, useSelector } from "react-redux";
import { sepia } from "../../reducers/effects/effectsSlice";

function Sepia() {
  const dispatch = useDispatch();

  const { sepia: Value } = useSelector((state: any) => state.effects);
  const { photoURl: photo } = useSelector((state: any) => state.photo);
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);

  return (
    <div>
      <p className="truncate mt-4">sepia {Opened && `(${Value}%)`}</p>
      {Opened && (
        <>
          <input
            className="accent-blue-800  w-full"
            type="range"
            step="1"
            disabled={photo === null}
            value={Value}
            onChange={(e) => {
              dispatch(sepia(+e.target.value));
            }}
            max="100"
            min="0"
          />
        </>
      )}
    </div>
  );
}

export default Sepia;
