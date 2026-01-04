import { useEffect, lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import SmoothScroll from "./components/SmoothScroll";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // Keep Index eager for fast LCP
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load secondary pages for faster initial bundle load
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Globus = lazy(() => import("./pages/Globus"));
const Team = lazy(() => import("./pages/Team"));
const Events25_26 = lazy(() => import("./pages/Events/Events25-26"));
const Films = lazy(() => import("./pages/Films"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const Core = lazy(() => import("./pages/Core"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false,
    },
  },
});


const App = () => {
  // Warm up backend on initial load to mitigate Render's free tier sleep
  useEffect(() => {
    fetch('https://vitsion-website-backend.onrender.com/api/home').catch(() => { });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll />
          <ScrollToTop />
          <Layout>
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
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
                <Route path="/core" element={<Core />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider >
    </QueryClientProvider >
  );
};

export default App;
