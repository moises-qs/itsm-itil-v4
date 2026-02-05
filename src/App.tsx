import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServiceDesk from './pages/ServiceDesk';
import IncidentProblem from './pages/IncidentProblem';
import ChangeManagement from './pages/ChangeManagement';
import ServiceAssurance from './pages/ServiceAssurance';
import Conclusions from './pages/Conclusions';
import Bibliography from './pages/Bibliography';

function App() {
   return (
      <div className="min-h-screen bg-gray-50">
         <ScrollToTop />
         <Navigation />
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/service-desk" element={<ServiceDesk />} />
               <Route path="/incidentes-problemas" element={<IncidentProblem />} />
               <Route path="/gestion-cambios" element={<ChangeManagement />} />
               <Route path="/garantia-servicio" element={<ServiceAssurance />} />
               <Route path="/conclusiones" element={<Conclusions />} />
               <Route path="/bibliografia" element={<Bibliography />} />
            </Routes>
         </main>
         <footer className="bg-slate-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
               <p className="text-gray-400">
                  Sitio web educativo sobre Fundamentos de ITIL v4
               </p>
               <p className="text-gray-500 text-sm mt-2">
                  Desarrollado por Moises
               </p>
            </div>
         </footer>
      </div>
   );
}

export default App;
