

import { BibliographyItem } from '../types';
import { ExternalLink, Book } from 'lucide-react';

export default function Bibliography() {
   const bibliographyItems: BibliographyItem[] = [
      // Referencias ordenadas alfabéticamente según formato APA
      {
         title: 'AXELOS. (2019). ITIL Foundation: ITIL 4 Edition. TSO (The Stationery Office)',
         url: 'https://www.axelos.com/certifications/itil-service-management/itil-4-foundation',
         type: 'Web',
      },
      {
         title: 'Atlassian. (s.f.). ITSM: Gestión de cambios',
         url: 'https://www.atlassian.com/es/itsm/change-management',
         type: 'Web',
      },
      {
         title: 'Ediciones ENI. (s.f.). ITIL 4: Entender el enfoque y adoptar las buenas prácticas',
         url: 'https://www.ediciones-eni.com/libro/itil-4-entender-el-enfoque-y-adoptar-las-buenas-practicas-2-edicion-9782409047947/las-practicas-de-gestion-de-servicios',
         type: 'Web',
      },
      {
         title: 'ISO/IEC. (2018). ISO/IEC 20000-1:2018 - Tecnologías de la información. Gestión de servicios',
         url: 'https://www.iso.org/standard/70636.html',
         type: 'Web',
      },
      {
         title: 'ITSM Tools. (s.f.). ITIL 4 Service Desk Practice Guide',
         url: 'https://itsm.tools/itil-4-service-desk-practice-guide/',
         type: 'Web',
      },
      {
         title: 'ManageEngine. (s.f.). Prácticas de gestión de ITIL 4',
         url: 'https://www.manageengine.com/latam/service-desk/itsm/practicas-de-gestion-de-itil-4.html',
         type: 'Web',
      },
      {
         title: 'Poveda Carranza, R. J., & Westreicher Flores, F. A. (2022). Propuesta de mejora para la gestión de incidencias de una mesa de ayuda tecnológica de una empresa de telecomunicaciones utilizando ITIL v4 [Tesis de maestría, Universidad Peruana de Ciencias Aplicadas]',
         url: 'http://hdl.handle.net/10757/660399',
         type: 'PDF',
      },
      {
         title: 'Suyo, J. (2024). S5 - Gestión de servicios TI - Las Prácticas de ITIL 4. Universidad Continental. Material del curso',
         url: '#',
         type: 'PDF',
      },
      {
         title: 'Virima. (s.f.). Guide to ITIL Incident and Problem Management',
         url: 'https://virima.com/blog/guide-to-itil-incident-and-problem-management',
         type: 'Web',
      },
   ];

   const getTypeColor = (type: BibliographyItem['type']) => {
      switch (type) {
         case 'PDF':
            return 'bg-red-100 text-red-700 border-red-200';
         case 'Video':
            return 'bg-purple-100 text-purple-700 border-purple-200';
         case 'Blog':
            return 'bg-green-100 text-green-700 border-green-200';
         default:
            return 'bg-blue-100 text-blue-700 border-blue-200';
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 animate-fade-in">
         <div className="max-w-7xl mx-auto px-4 py-8">

            {/* Header */}
            <section className="bg-gradient-to-r from-white to-indigo-50 p-10 rounded-2xl shadow-xl mb-12 border-t-4 border-indigo-600">
               <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                     <Book className="w-12 h-12 text-indigo-600" />
                     <h1 className="text-5xl font-extrabold text-slate-900">
                        Bibliografía y Referencias
                     </h1>
                  </div>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                     Fuentes académicas y estándares internacionales consultados para fundamentar este trabajo sobre ITIL V4
                  </p>
               </div>
            </section>

            {/* Lista de Referencias */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
               <div className="grid gap-4">
                  {bibliographyItems.map((item, index) => {
                     return (
                        <div
                           key={index}
                           className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 group hover:border-indigo-200"
                        >
                           <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                                 {item.title}
                              </h3>
                              <span
                                 className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
                                    item.type
                                 )}`}
                              >
                                 {item.type}
                              </span>
                           </div>
                           {item.url !== '#' ? (
                              <a
                                 href={item.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center gap-2 group/link break-all font-medium"
                              >
                                 <span className="group-hover/link:underline">Visitar recurso</span>
                                 <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover/link:translate-x-1 transition-transform" />
                              </a>
                           ) : (
                              <p className="text-gray-500 text-sm italic">Material del curso (no disponible públicamente)</p>
                           )}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
