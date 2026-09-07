import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Caregivers from "./pages/Caregivers";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import TwentyFourHourCare from "./pages/TwentyFourHourCare";
import DementiaCare from "./pages/DementiaCare";
import DisabilityManagement from "./pages/DisabilityManagement";
import LightHousekeeping from "./pages/LightHousekeeping";
import LongTermCareInsurance from "./pages/LongTermCareInsurance";
import PatientCenteredCare from "./pages/PatientCenteredCare";
import PersonalInHomeCare from "./pages/PersonalInHomeCare";
import RespiteShortTermCare from "./pages/RespiteShortTermCare";
import RecentHospitalization from "./pages/RecentHospitalization";
import SeniorCareManagement from "./pages/SeniorCareManagement";
import AlzheimersDementiaCare from "./pages/AlzheimersDementiaCare";
import ReducingHospitalReadmissions from "./pages/ReducingHospitalReadmissions";
import CaregiverPositions from "./pages/CaregiverPositions";
import Apply from "./pages/Apply";
import HomeHealthVsInHomeCare from "./pages/HomeHealthVsInHomeCare";
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
  "/in-home-care/24-hour-care-service",
  "/dementia-care",
  "/in-home-care/disability-management",
  "/in-home-care/light-housekeeping",
  "/in-home-care/long-term-care-insurance",
  "/in-home-care/patient-centered-care",
  "/in-home-care/personal-in-home-care",
  "/in-home-care/respite-and-short-term-care",
  "/in-home-care/transitions-of-care",
  "/in-home-care/senior-and-elder-care-management",
  "/dementia-care/in-home-care-for-alzheimers",
  "/for-professionals/reducing-hospital-readmission",
  "/careers/caregiver-positions",
  "/careers/apply",
  "/resources/home-health-care-vs-in-home-care",
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
        <Route
          path="in-home-care/24-hour-care-service"
          element={<TwentyFourHourCare />}
        />
        <Route path="dementia-care" element={<DementiaCare />} />
        <Route
          path="in-home-care/disability-management"
          element={<DisabilityManagement />}
        />
        <Route
          path="in-home-care/light-housekeeping"
          element={<LightHousekeeping />}
        />
        <Route
          path="in-home-care/long-term-care-insurance"
          element={<LongTermCareInsurance />}
        />
        <Route
          path="in-home-care/patient-centered-care"
          element={<PatientCenteredCare />}
        />
        <Route
          path="in-home-care/personal-in-home-care"
          element={<PersonalInHomeCare />}
        />
        <Route
          path="in-home-care/respite-and-short-term-care"
          element={<RespiteShortTermCare />}
        />
        <Route
          path="in-home-care/transitions-of-care"
          element={<RecentHospitalization />}
        />
        <Route
          path="in-home-care/senior-and-elder-care-management"
          element={<SeniorCareManagement />}
        />
        <Route
          path="dementia-care/in-home-care-for-alzheimers"
          element={<AlzheimersDementiaCare />}
        />
        <Route
          path="for-professionals/reducing-hospital-readmission"
          element={<ReducingHospitalReadmissions />}
        />
        <Route
          path="careers/caregiver-positions"
          element={<CaregiverPositions />}
        />
        <Route path="careers/apply" element={<Apply />} />
        <Route
          path="resources/home-health-care-vs-in-home-care"
          element={<HomeHealthVsInHomeCare />}
        />
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
