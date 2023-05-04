import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../reducers/menu/openedMenuSlice";
import Effects from "./Effects";
import Toggler from "./Toggler";

function Sidebar() {
  const { isMenuOpened: Opened } = useSelector((state: any) => state.menu);
  const dispatch = useDispatch();
  const toggleSettings = () => {
    dispatch(toggle());
  };

  return (
    <>
      <div
        className={`${
          Opened ? "max-w-[150px] " : "max-w-[80px]"
        } bg-blue-600 min-h-[100vh] transition-all duration-200 text-[14px] text-white px-2 py-3`}
      >
        <Toggler toggleSettings={toggleSettings} opened={Opened} />
        <Effects />
      </div>
    </>
  );
}

export default Sidebar;
