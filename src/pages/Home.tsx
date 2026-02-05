

import { Link } from 'react-router-dom';
import { Users, Code, ArrowRight, BookOpen, Headphones, AlertCircle, GitPullRequest, ShieldCheck, Lightbulb } from 'lucide-react';

const Home = () => {
   const modules = [
      {
         title: 'Service Desk',
         description: 'El punto de entrada y conexión con el usuario.',
         icon: <Headphones className="w-8 h-8 text-blue-500" />,
         link: '/service-desk',
         color: 'bg-blue-50 border-blue-100 hover:border-blue-300'
      },
      {
         title: 'Incidentes y Problemas',
         description: 'Restaurar la operación vs. Eliminar la causa raíz.',
         icon: <AlertCircle className="w-8 h-8 text-red-500" />,
         link: '/incidentes-problemas',
         color: 'bg-red-50 border-red-100 hover:border-red-300'
      },
      {
         title: 'Gestión de Cambios',
         description: 'Maximizar el éxito de los cambios gestionando el riesgo.',
         icon: <GitPullRequest className="w-8 h-8 text-indigo-500" />,
         link: '/gestion-cambios',
         color: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300'
      },
      {
         title: 'Garantía del Servicio',
         description: 'Capacidad, Disponibilidad y Continuidad del servicio.',
         icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
         link: '/garantia-servicio',
         color: 'bg-green-50 border-green-100 hover:border-green-300'
      },
      {
         title: 'Conclusiones',
         description: 'Puntos clave y valor para el negocio.',
         icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
         link: '/conclusiones',
         color: 'bg-yellow-50 border-yellow-100 hover:border-yellow-300'
      },
      {
         title: 'Bibliografía',
         description: 'Fuentes y referencias consultadas.',
         icon: <BookOpen className="w-8 h-8 text-gray-500" />,
         link: '/bibliografia',
         color: 'bg-gray-50 border-gray-100 hover:border-gray-300'
      }
   ];

   return (
      <div className="space-y-16 animate-fade-in pb-12">
         {/* Hero Section */}
         <section className="text-center space-y-6 pt-10">
            <div className="relative">
               <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight sm:text-6xl mb-4 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                     Gestión de Servicios TI
                  </span>
                  <br/>
                  <span className="text-slate-900">con ITIL V4</span>
               </h1>
               <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg">
                     <span className="text-lg font-bold text-white">ITIL V4</span>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
               </div>
            </div>

            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed pb-4">
               ITIL V4 (Information Technology Infrastructure Library) es el marco de referencia mundial para la gestión de servicios de TI. Descubre cómo co-crear valor mediante: <strong>Service Desk</strong>, <strong>Gestión de Incidentes y Problemas</strong>, <strong>Gestión de Cambios</strong>, y <strong>Garantía del Servicio</strong> (Capacidad, Disponibilidad y Continuidad).
            </p>

            {/* Cadena de Valor visual */}
            <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg border border-purple-100">
               <h2 className="font-semibold text-purple-700 mb-6">Sistema de Valor del Servicio - Cadena de Valor</h2>
               <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                  <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold">Planear</div>
                  <span className="text-purple-400">→</span>
                  <div className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">Diseñar y Transicionar</div>
                  <span className="text-blue-400">→</span>
                  <div className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-semibold">Obtener/Construir</div>
                  <span className="text-indigo-400">→</span>
                  <div className="px-3 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">Entregar y Soportar</div>
                  <span className="text-green-400">→</span>
                  <div className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg font-semibold">Mejorar</div>
               </div>
            </div>
         </section>

         {/* Navigation Grid */}
         <section className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {modules.map((item, index) => (
                  <Link
                     key={index}
                     to={item.link}
                     className={`group p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1 ${item.color} block`}
                  >
                     <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
                        {item.icon}
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between">
                        {item.title}
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                     </h3>
                     <p className="text-gray-600 leading-relaxed">
                        {item.description}
                     </p>
                  </Link>
               ))}
            </div>
         </section>

         {/* Team / Author Section */}
         <section className="max-w-4xl mx-auto px-4 mt-20">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-slate-800">Equipo de Trabajo</h2>
               <p className="text-gray-500 mt-2">Desarrollado por:</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-lg mx-auto transform transition-all hover:scale-105 duration-500">
               <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
               <div className="px-8 pb-8">
                  <div className="relative -mt-16 mb-6 flex justify-center">
                     <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
                        <img
                           src="https://i.imgur.com/6EdIEru.jpeg"
                           alt="Moises Quispe Solano"
                           className="w-full h-full rounded-full object-cover"
                        />
                     </div>
                  </div>
                  <div className="text-center">
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">Moises Quispe Solano</h3>
                     <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-slate-50 py-2 px-4 rounded-full mx-auto w-max border border-slate-200">
                        <Code className="w-4 h-4" />
                        <span>Estudiante de Ingeniería de Sistemas e Informática</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;
