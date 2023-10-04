import Items from "./components/Items";
import CarNav from "./components/CarNav" 
import Page from "./components/Page";
import { useState } from "react";
function App() {

  const [dataFromChild, setDataFromChild] = useState('');
  return (
    <div className="m-3">
        <CarNav sendDataToParent={setDataFromChild}/>
        {/* <Items/> file inside the page file */}
        <Page sendData={dataFromChild}/>
        

    </div>
  );
}

export default App;
