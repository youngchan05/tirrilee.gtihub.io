
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Layout from "./components/UI/organisms/Layout";
import FeedDetail from "./pages/Feed/FeedDetail";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";
import ServiceDetail from "./pages/Service/ServiceDetail";
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/service/:type" element={<ServiceDetail/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/feed/:id" element={<FeedDetail/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Layout />
      </>
  );
}

export default App;
