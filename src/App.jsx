
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import RowPost from "./components/RowPost/RowPost";
import { trendings,action } from "./Constants";

function App() {

  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={trendings} postertitle='Trending'/>
      <RowPost url={action} postertitle='Actions'/>
      <RowPost url={action} postertitle='Actions'/>
    </div>
  );
}

export default App;
