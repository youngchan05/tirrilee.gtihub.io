
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Layout from "./components/UI/organisms/Layout";
import FeedDetail from "./pages/Feed/FeedDetail";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";
import ServiceDetail from "./pages/Service/ServiceDetail";
import PlanDetail from "./pages/Plan/PlanDetail";
import Work from "./pages/Work/Work";
import WorkDetail from "./pages/Work/WorkDetail";
import Team from "./pages/Team/Team";
import TeamDetail from "./pages/Team/TeamDetail";
import About from "./pages/About/About";
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/service/:type" element={<ServiceDetail/>} />
          <Route path="/service/plan/:type" element={<PlanDetail/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/team/:name" element={<TeamDetail/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/work/:id" element={<WorkDetail/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/feed/:id" element={<FeedDetail/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Layout />
      </>
  );
}

export default App;
