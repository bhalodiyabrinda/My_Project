import Attributes from "./pages/Attributes";
import ChildComp from "./Components/child-comp";
import ClassComp from "./Components/class-comp";
import Garage from "./Components/CoGarage";
import Component from "./Components/Component";
import Conditions from "./pages/Conditions";
import Car from "./pages/Expressions";
import ParentComp from "./Components/parent-comp";
import ClassPropsComp from "./Components/Class-props-comp";
import PropsConstructor from "./Components/Props_Constructor";
import Component2 from "./Components/Comp2";
import Props2 from "./Props/Props2";
import Events from "./pages/Events";
import Lists from "./pages/Lists";
import Forms from "./pages/Forms";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";


function App() {
  return (
    // <>
    //   {/* Expressions */}
    //   <Car />

    //   {/* Attributes */}
    //   <Attributes/>

    //   {/* Conditions */}
    //   <Conditions/>

    //   {/* Component */}
    //   {/* <Component color="red" /> */}
    //   <Garage/>

    //   {/* parent-comp & chil-comp */}
    //   <ParentComp>
    //     <ChildComp />
    //   </ParentComp>
      
    //   {/* class-comp  */}
    //   {/* <ClassComp /> */}
    //   <ClassPropsComp />
    //   <PropsConstructor />
    //   <Component2 />

    //   {/* Props */}
    //   <Props2 />
      
    //   {/* Events */}
    //   <Events />

    //   {/* Lists */}
    //   <Lists/>
      
    //   {/* Forms */}
    //   <Forms/>
    // </>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

  //   <React.StrictMode>
  //  <AppRoutes/>
  // </React.StrictMode>
  );  
}
export default App
