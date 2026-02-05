import { NavLink } from 'react-router-dom';
import { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
   { path: '/', label: 'Presentación' },
   { path: '/service-desk', label: 'Service Desk' },
   { path: '/incidentes-problemas', label: 'Incidentes y Problemas' },
   { path: '/gestion-cambios', label: 'Gestión de Cambios' },
   { path: '/garantia-servicio', label: 'Garantía del Servicio' },
   { path: '/conclusiones', label: 'Conclusiones' },
   { path: '/bibliografia', label: 'Bibliografía' },
];

export default function Navigation() {
   return (
      <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center space-x-3">
                     {/* Logo ITIL V4 - Hexágono SVS */}
                     <div className="relative w-8 h-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 rounded-lg rotate-45 shadow-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                           </svg>
                        </div>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-white font-bold text-2xl tracking-tight">ITIL V4</span>
                     </div>
                  </div>
               </div>
               <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-1">
                     {navigationItems.map((item) => (
                        <NavLink
                           key={item.path}
                           to={item.path}
                           className={({ isActive }) =>
                              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                                 ? 'bg-blue-600 text-white shadow-lg'
                                 : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                              }`
                           }
                        >
                           {item.label}
                        </NavLink>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
               {navigationItems.map((item) => (
                  <NavLink
                     key={item.path}
                     to={item.path}
                     className={({ isActive }) =>
                        `block w-full text-left px-3 py-2 rounded-md text-base font-medium ${isActive
                           ? 'bg-blue-600 text-white'
                           : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`
                     }
                  >
                     {item.label}
                  </NavLink>
               ))}
            </div>
         </div>
      </nav>
   );
}
