import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import FavoriteMeetUps from "./pages/FavoriteMeetUps";
import Navigation from "./layout/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<AllMeetUps />} />
        <Route path="new" element={<NewMeetUps />} />
        <Route path="fav" element={<FavoriteMeetUps />} />
      </Route>
    </Routes>
  );
}

export default App;
