import Blur from "./Effects/Blur";
import Brightness from "./Effects/Brightness";
import Contrast from "./Effects/Contrast";
import Hue from "./Effects/Hue";
import Opacity from "./Effects/Opacity";
import Reset from "./Effects/Reset";
import Saturate from "./Effects/Saturate";
import Sepia from "./Effects/Sepia";

function Effects() {
  return (
    <>
      <div className="text-center pb-20">
        <Opacity />
        <Contrast />
        <Brightness />
        <Blur />
        <Hue />
        <Sepia />
        <Saturate />

        <Reset />
      </div>
    </>
  );
}

export default Effects;
