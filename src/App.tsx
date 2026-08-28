import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Caregivers from "./pages/Caregivers";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import StubPage from "./pages/StubPage";
import NotFound from "./pages/NotFound";
import { navMenus, utilityMenus } from "./data/site";

// Paths that render a real page. Everything else referenced by the nav gets a
// shared placeholder route generated below.
const REAL_PATHS = new Set([
  "/",
  "/services",
  "/about",
  "/locations",
  "/careers",
  "/caregivers",
  "/contact",
]);

const stubPages = [
  ...new Map(
    [...navMenus, ...utilityMenus]
      .flatMap((m) => [{ label: m.label, to: m.to }, ...(m.items ?? [])])
      .filter((i) => !REAL_PATHS.has(i.to))
      .map((i) => [i.to, i.label] as const),
  ),
].map(([to, label]) => ({ to, label }));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="about" element={<About />} />
        <Route path="caregivers" element={<Caregivers />} />
        <Route path="careers" element={<Caregivers />} />
        <Route path="locations" element={<Locations />} />
        <Route path="contact" element={<Contact />} />
        {stubPages.map((p) => (
          <Route
            key={p.to}
            path={p.to.replace(/^\//, "")}
            element={<StubPage title={p.label} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
