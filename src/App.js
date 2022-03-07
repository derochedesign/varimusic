import "./styles/main.scss";
import Feed from "./pages/Feed";
import Library from "./pages/Library";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <main>
          <TopNav />
          <section className="inner-main">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </section>
          
          <BottomNav />
        </main>
      {/* </Layout> */}
      
    </BrowserRouter>
  );
}

export default App;
