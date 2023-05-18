import { useRef } from "react";
import Memo from "./pages/Memo";
import ReRendering from "./pages/ReRendering";
import ReactUseCallBack from "./pages/ReactUseCallBack";
import ReactUseMemo from "./pages/ReactUseMemo";
import StartTransition from "./pages/StartTransition";
import SuspenseLazy from "./pages/SuspenseLazy";
import SvgAsComponent from "./pages/SvgAsComponent";

function App() {
   const domRef = useRef(document.documentElement);

   return (
      <>
         <button onClick={() => {}}>Toggle</button>
         {/* <SvgAsComponent /> */}
         {/* <SuspenseLazy /> */}
         {/* <ReRendering /> */}
         {/* <Memo /> */}
         {/* <ReactUseMemo /> */}
         <ReactUseCallBack />
         {/* <StartTransition /> */}
      </>
   );
}

export default App;
