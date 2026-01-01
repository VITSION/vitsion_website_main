import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Globus from "./pages/Globus";
import Team from "./pages/Team";
import Events25_26 from "./pages/Events/Events25-26";

import Films from "./pages/Films";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/globus" element={<Globus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/2025-26" element={<Events25_26 />} />
            <Route path="/films" element={<Films />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider >
  </QueryClientProvider >
);

export default App;
