import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import BrandGuidelinesPage from "./pages/BrandGuidelinesPage";
import ITResourcesPage from "./pages/ITResourcesPage";
import ContactPage from "./pages/ContactPage";
import OpsRequestPage from "./pages/OpsRequestPage";
import FAQsPage from "./pages/FAQsPage";

export const router = createBrowserRouter(
  [
    { path: "/", Component: HomePage },
    { path: "/resources", Component: ResourcesPage },
    { path: "/brand-guidelines", Component: BrandGuidelinesPage },
    { path: "/it-resources", Component: ITResourcesPage },
    { path: "/contact", Component: ContactPage },
    { path: "/ops-request", Component: OpsRequestPage },
    { path: "/faqs", Component: FAQsPage },
  ],
  { basename: import.meta.env.BASE_URL },
);
