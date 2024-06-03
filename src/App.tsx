import FooterContainer from "./containers/FooterContainer";
import HeaderContainer from "./containers/HeaderContainer";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProgramsPage from "./pages/ProgramsPage";
import NewsPage from "./pages/NewsPage";
import ResourcesPage from "./pages/ResourcesPage";
import PartnersPage from "./pages/PartnersPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
