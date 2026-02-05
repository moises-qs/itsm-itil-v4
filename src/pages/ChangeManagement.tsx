import React from 'react';
import PageLayout from '../components/PageLayout';
import MermaidDiagram from '../components/MermaidDiagram';
import {
   GitPullRequest, GitMerge, CheckCircle, AlertTriangle, Clock, Shield,
   Users, FileText, Calendar, Target, TrendingUp, Zap, Lock, Unlock, GitBranch
} from 'lucide-react';

const chart = `
graph TB
    Start([Inicio]) --> RFC[📋 Solicitud de Cambio - RFC]
    RFC --> Tipo{Tipo de Cambio}

    Tipo -->|Estándar| Pre[✅ Pre-autorizado]
    Pre --> Std[Proceso Documentado]
    Std --> ImpStd[Implementación Directa]

    Tipo -->|Normal| Eval[📊 Evaluación de Riesgo]
    Eval --> Plan[📝 Plan de Implementación]
    Plan --> Auth{Autorización CAB}
    Auth -->|Aprobado| Sched[📅 Programar en Calendario]
    Auth -->|Rechazado| End1([Fin - Rechazado])
    Sched --> ImpNorm[⚙️ Implementación]

    Tipo -->|Emergencia| Urgent[🚨 Evaluación Acelerada]
    Urgent --> AuthEm{ECAB Aprueba}
    AuthEm -->|Sí| ImpEm[⚡ Implementación Inmediata]
    ImpEm --> DocPost[📄 Documentación Post-Cambio]
    AuthEm -->|No| End2([Fin - Rechazado])

    ImpStd --> Review[🔍 Revisión Post-Implementación]
    ImpNorm --> Review
    DocPost --> Review
    Review --> Close([✅ Cierre])

    style RFC fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style Pre fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style Urgent fill:#ffebee,stroke:#c62828,stroke-width:2px
    style Review fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style Close fill:#e8f5e9,stroke:#2e7d32,stroke-width:3px
`;

const ChangeManagement = () => {
   return (
      <PageLayout title="Gestión de Cambios" icon={<GitPullRequest />}>

         {/* Definición y Concepto */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600">
            <div className="space-y-6">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                     <GitPullRequest className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Change Enablement - Habilitación del Cambio</h2>
               </div>

               <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                  <p className="text-lg text-slate-700 mb-3">
                     <strong>CAMBIO:</strong> <span className="italic">"La adición, modificación o eliminación de cualquier cosa que pueda tener un efecto directo o indirecto en los servicios."</span>
                  </p>
               </div>

               <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3 text-xl flex items-center gap-2">
                     <Target className="w-6 h-6" />
                     Propósito del Control de Cambios
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                     El propósito de la práctica de <strong>Change Enablement</strong> es <strong>maximizar el número de cambios exitosos</strong> al:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Asegurar que los riesgos hayan sido evaluados adecuadamente</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Autorizar cambios para proceder de manera segura</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Gestionar el calendario de cambios eficientemente</span>
                     </li>
                  </ul>
               </div>

               {/* Cambio de Mentalidad */}
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                     <div className="flex items-center gap-2 mb-3">
                        <Lock className="w-6 h-6 text-red-600" />
                        <h4 className="font-bold text-red-800 text-lg">Antes (ITIL v3)</h4>
                     </div>
                     <p className="text-slate-700 text-sm">
                        <strong>"Control"</strong> → Evitar cambios por miedo al riesgo. Enfoque restrictivo y burocrático.
                     </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                     <div className="flex items-center gap-2 mb-3">
                        <Unlock className="w-6 h-6 text-green-600" />
                        <h4 className="font-bold text-green-800 text-lg">Ahora (ITIL v4)</h4>
                     </div>
                     <p className="text-slate-700 text-sm">
                        <strong>"Habilitación"</strong> → Facilitar cambios necesarios minimizando riesgos. Enfoque ágil y efectivo.
                     </p>
                  </div>
               </div>

               <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-lg">
                  <p className="text-yellow-900 font-semibold text-center">
                     💡 El objetivo no es <strong>prevenir cambios</strong>, sino <strong>habilitarlos de forma segura y efectiva</strong>
                  </p>
               </div>
            </div>
         </section>

         {/* Tipos de Cambios */}
         <section className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
               <GitMerge className="w-8 h-8 text-indigo-600" />
               Tipos de Cambios en ITIL v4
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
               {/* Cambio Estándar */}
               <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-400 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-14 h-14 bg-green-200 rounded-2xl flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-700" />
                     </div>
                     <h3 className="text-2xl font-bold text-green-800">Estándar</h3>
                  </div>

                  <div className="space-y-3">
                     <div className="bg-white p-3 rounded-lg shadow-sm">
                        <h4 className="font-bold text-green-800 text-sm mb-2">Características:</h4>
                        <ul className="text-xs text-slate-700 space-y-1">
                           <li>✓ Pre-autorizados</li>
                           <li>✓ Bajo riesgo</li>
                           <li>✓ Rutinarios y frecuentes</li>
                           <li>✓ Proceso bien documentado</li>
                        </ul>
                     </div>

                     <div className="bg-green-50 p-3 rounded-lg border border-green-300">
                        <h4 className="font-bold text-green-800 text-sm mb-2">Ejemplos:</h4>
                        <ul className="text-xs text-slate-700 space-y-1">
                           <li>• Restablecer contraseña</li>
                           <li>• Agregar memoria RAM (dentro de límites)</li>
                           <li>• Instalar software de catálogo aprobado</li>
                           <li>• Actualización mensual de antivirus</li>
                        </ul>
                     </div>

                     <div className="bg-green-100 p-3 rounded-lg">
                        <p className="text-xs text-green-900 font-semibold">
                           ⚡ No requiere aprobación adicional. Se ejecuta siguiendo el procedimiento establecido.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Cambio Normal */}
               <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl border-2 border-indigo-400 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-14 h-14 bg-indigo-200 rounded-2xl flex items-center justify-center">
                        <GitMerge className="w-8 h-8 text-indigo-700" />
                     </div>
                     <h3 className="text-2xl font-bold text-indigo-800">Normal</h3>
                  </div>

                  <div className="space-y-3">
                     <div className="bg-white p-3 rounded-lg shadow-sm">
                        <h4 className="font-bold text-indigo-800 text-sm mb-2">Características:</h4>
                        <ul className="text-xs text-slate-700 space-y-1">
                           <li>✓ Requieren autorización</li>
                           <li>✓ Riesgo variable</li>
                           <li>✓ Proceso definido de evaluación</li>
                           <li>✓ Programados en calendario</li>
                        </ul>
                     </div>

                     <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-300">
                        <h4 className="font-bold text-indigo-800 text-sm mb-2">Ejemplos:</h4>
                        <ul className="text-xs text-slate-700 space-y-1">
                           <li>• Actualización mayor de software</li>
                           <li>• Cambio en infraestructura de red</li>
                           <li>• Migración de servidores a la nube</li>
                           <li>• Implementación de nuevo servicio</li>
                        </ul>
                     </div>

                     <div className="bg-indigo-100 p-3 rounded-lg">
                        <p className="text-xs text-indigo-900 font-semibold">
                           📋 Requiere RFC, evaluación, autorización CAB y programación.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Cambio de Emergencia */}
               <div className="bg-gradient-to-br from-red-50 to-orange-100 p-6 rounded-2xl border-2 border-red-400 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-14 h-14 bg-red-200 rounded-2xl flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 text-red-700" />
                     </div>
                     <h3 className="text-2xl font-bold text-red-800">Emergencia</h3>
                  </div>

                  <div className="space-y-3">
                     <div className="bg-white p-3 rounded-lg shadow-sm">
                        <h4 className="font-bold text-red-800 text-sm mb-2">Características:</h4>
                        <ul className="text-xs text-slate-700 space-y-1">
                           <li>✓ Urgentes e inmediatos</li>
                           <li>✓ Respuesta a incidentes críticos</li>
                           <li>✓ Proceso acelerado</li>
                           <li>✓ Autorización especial (ECAB)</li>
                        </ul>
                     </div>

                     <div className="bg-red-50 p-3 rounded-lg border border-red-300">
                        <h4 className="font-bold text-red-800 text-sm mb-2">Ejemplos:</h4>
                        <ul className="text-xs text-slate-700 space-y-1">
                           <li>• Parche de seguridad crítico</li>
                           <li>• Restaurar servicio tras desastre</li>
                           <li>• Corrección urgente de error crítico</li>
                           <li>• Vulnerabilidad zero-day</li>
                        </ul>
                     </div>

                     <div className="bg-red-100 p-3 rounded-lg">
                        <p className="text-xs text-red-900 font-semibold">
                           ⚡ Implementación inmediata. Documentación posterior obligatoria.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Proceso de Cambio Normal */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <FileText className="w-7 h-7 text-purple-600" />
               Proceso de Cambio Normal (6 Pasos)
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                     <h3 className="font-bold text-blue-900">Solicitud (RFC)</h3>
                  </div>
                  <p className="text-sm text-slate-700">Se crea una Request for Change con detalles del cambio propuesto</p>
               </div>

               <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-600">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                     <h3 className="font-bold text-purple-900">Evaluación</h3>
                  </div>
                  <p className="text-sm text-slate-700">Análisis de riesgo, impacto técnico/financiero, plan de implementación y rollback</p>
               </div>

               <div className="bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-600">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                     <h3 className="font-bold text-indigo-900">Autorización</h3>
                  </div>
                  <p className="text-sm text-slate-700">Aprobación por la autoridad de cambios apropiada (persona o CAB)</p>
               </div>

               <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-600">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                     <h3 className="font-bold text-green-900">Programación</h3>
                  </div>
                  <p className="text-sm text-slate-700">Inclusión en el calendario de cambios, coordinando con otros cambios</p>
               </div>

               <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-600">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                     <h3 className="font-bold text-yellow-900">Implementación</h3>
                  </div>
                  <p className="text-sm text-slate-700">Ejecución según el plan establecido, dentro de la ventana de cambio</p>
               </div>

               <div className="bg-teal-50 p-5 rounded-xl border-l-4 border-teal-600">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                     <h3 className="font-bold text-teal-900">Revisión</h3>
                  </div>
                  <p className="text-sm text-slate-700">Post-implementación para validar éxito y documentar lecciones aprendidas</p>
               </div>
            </div>
         </section>

         {/* Calendario de Cambios */}
         <section className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Calendar className="w-7 h-7 text-blue-600" />
               Calendario de Cambios (Change Schedule)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                     El <strong>Change Schedule</strong> es una herramienta fundamental para la gestión efectiva de cambios:
                  </p>

                  <div className="bg-white p-5 rounded-xl shadow-sm">
                     <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Funciones Principales
                     </h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                           <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                           <span>Planifica cambios autorizados con fecha y hora</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                           <span>Identifica conflictos potenciales entre cambios</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                           <span>Comunica cambios planificados a la organización</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                           <span>Ayuda en diagnóstico de incidentes ("¿hubo algún cambio reciente?")</span>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                     <FileText className="w-5 h-5 text-slate-600" />
                     Información que Contiene
                  </h3>
                  <div className="space-y-3 text-sm">
                     <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                           <span className="font-semibold text-slate-800">Programación:</span>
                           <span className="text-slate-600"> Fecha, hora y ventana de cambio</span>
                        </div>
                     </div>
                     <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                           <span className="font-semibold text-slate-800">Responsable:</span>
                           <span className="text-slate-600"> Propietario del cambio</span>
                        </div>
                     </div>
                     <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                           <span className="font-semibold text-slate-800">Impacto:</span>
                           <span className="text-slate-600"> Sistemas afectados y usuarios impactados</span>
                        </div>
                     </div>
                     <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                           <span className="font-semibold text-slate-800">Estado:</span>
                           <span className="text-slate-600"> Programado, En progreso, Completado, Rollback</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Autoridad de Cambios (CAB) */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Users className="w-7 h-7 text-indigo-600" />
               Autoridad de Cambios (Change Authority)
            </h2>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-8">
               <p className="text-lg text-indigo-900 italic">
                  "Es esencial que se asigne la autoridad de cambios correcta a cada tipo de cambio para garantizar que el control de cambios sea eficiente y efectivo."
               </p>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full border-collapse shadow-lg">
                  <thead>
                     <tr className="bg-indigo-700 text-white">
                        <th className="border border-indigo-600 px-6 py-4 text-left">Tipo de Cambio</th>
                        <th className="border border-indigo-600 px-6 py-4 text-left">Autoridad</th>
                        <th className="border border-indigo-600 px-6 py-4 text-left">Características</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white">
                     <tr className="hover:bg-green-50">
                        <td className="border border-slate-300 px-6 py-4 font-bold text-green-800">Estándar</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">Pre-autorizado (ninguna)</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">Flujo de trabajo aprobado previamente</td>
                     </tr>
                     <tr className="hover:bg-blue-50">
                        <td className="border border-slate-300 px-6 py-4 font-bold text-blue-800">Normal - Bajo riesgo</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">Líder técnico / Gerente de TI</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">Autorización individual rápida</td>
                     </tr>
                     <tr className="hover:bg-indigo-50">
                        <td className="border border-slate-300 px-6 py-4 font-bold text-indigo-800">Normal - Alto riesgo</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">CAB (Change Advisory Board)</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">Comité multidisciplinario</td>
                     </tr>
                     <tr className="hover:bg-red-50">
                        <td className="border border-slate-300 px-6 py-4 font-bold text-red-800">Emergencia</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">ECAB (Emergency CAB)</td>
                        <td className="border border-slate-300 px-6 py-4 text-sm">Alta gerencia + expertos técnicos</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
               <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-300">
                  <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                     <Users className="w-5 h-5" />
                     Change Advisory Board (CAB)
                  </h3>
                  <ul className="text-sm text-slate-700 space-y-2">
                     <li>• Grupo que asesora en evaluación de cambios</li>
                     <li>• Incluye: representantes del negocio, TI, seguridad, operaciones</li>
                     <li>• No todos los miembros necesitan estar en todas las reuniones</li>
                     <li>• Puede ser virtual (evaluación por email) para cambios menores</li>
                  </ul>
               </div>

               <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-300">
                  <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                     <AlertTriangle className="w-5 h-5" />
                     Emergency CAB (ECAB)
                  </h3>
                  <ul className="text-sm text-slate-700 space-y-2">
                     <li>• Subgrupo del CAB con autoridad para emergencias</li>
                     <li>• Incluye alta gerencia y expertos técnicos clave</li>
                     <li>• Disponible 24/7 para decisiones críticas</li>
                     <li>• Autorización puede ser verbal inicialmente</li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Factores de Éxito */}
         <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-400">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Zap className="w-7 h-7 text-yellow-600" />
               Factores para el Éxito del Control de Cambios
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                     <Shield className="w-5 h-5" />
                     1. Cultura de Transparencia
                  </h3>
                  <p className="text-sm text-slate-700">
                     Todos los cambios deben registrarse. No deben existir "cambios no autorizados" frecuentes.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                     <Target className="w-5 h-5" />
                     2. Evaluación de Riesgos Robusta
                  </h3>
                  <p className="text-sm text-slate-700">
                     Impacto técnico, impacto en el negocio, ventana de cambio apropiada, plan de respaldo (rollback).
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                     <Users className="w-5 h-5" />
                     3. Comunicación Efectiva
                  </h3>
                  <p className="text-sm text-slate-700">
                     A usuarios afectados, equipos de soporte, calendario visible y actualizado.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                     <Zap className="w-5 h-5" />
                     4. Proceso Ágil pero Controlado
                  </h3>
                  <p className="text-sm text-slate-700">
                     No debe ser un cuello de botella. Debe facilitar cambios necesarios. Balance entre velocidad y control.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
                  <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                     <TrendingUp className="w-5 h-5" />
                     5. Métricas y Mejora Continua
                  </h3>
                  <div className="grid md:grid-cols-4 gap-3 text-sm">
                     <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-bold text-slate-800">% Cambios Exitosos</p>
                     </div>
                     <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-bold text-slate-800">% Cambios que causan incidentes</p>
                     </div>
                     <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-bold text-slate-800">Tiempo promedio de aprobación</p>
                     </div>
                     <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <p className="font-bold text-slate-800">Cambios de emergencia</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Cadena de Valor */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <TrendingUp className="w-7 h-7 text-green-600" />
               Cambios en la Cadena de Valor
            </h2>

            <p className="text-slate-700 mb-8 leading-relaxed">
               El <strong>Control de Cambios</strong> es central en la actividad de <strong className="text-indigo-600">Diseño y Transición</strong> de la Cadena de Valor, pero interactúa con todas las demás actividades:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-600">
                  <h3 className="font-bold text-purple-900 mb-2">Planear</h3>
                  <p className="text-sm text-slate-700">Cambios estratégicos y de largo plazo</p>
               </div>

               <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                     ⭐ Diseño y Transición
                  </h3>
                  <p className="text-sm text-slate-700">Actividad principal - evaluación, diseño del cambio, plan de transición</p>
               </div>

               <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                  <h3 className="font-bold text-blue-900 mb-2">Obtener/Construir</h3>
                  <p className="text-sm text-slate-700">Desarrollo o adquisición de componentes del cambio</p>
               </div>

               <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
                  <h3 className="font-bold text-green-900 mb-2">Entregar y Soportar</h3>
                  <p className="text-sm text-slate-700">Implementación del cambio en producción</p>
               </div>

               <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-600">
                  <h3 className="font-bold text-yellow-900 mb-2">Mejorar</h3>
                  <p className="text-sm text-slate-700">Cambios como resultado de iniciativas de mejora continua</p>
               </div>

               <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-600">
                  <h3 className="font-bold text-slate-900 mb-2">Involucrar</h3>
                  <p className="text-sm text-slate-700">Comunicación de cambios a stakeholders</p>
               </div>
            </div>

            <div className="mt-6 bg-indigo-50 border border-indigo-300 p-4 rounded-lg">
               <p className="text-indigo-900 italic text-center font-semibold">
                  💡 "La habilitación del cambio es central para la transición. Afecta desde la planificación hasta la entrega final y el soporte."
               </p>
            </div>
         </section>

         {/* Diagrama de Flujo */}
         <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <GitBranch className="w-7 h-7 text-slate-600" />
               Diagrama de Flujo de Autorización de Cambios
            </h2>
            <MermaidDiagram chart={chart} />
            <p className="text-center text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
               Este diagrama muestra cómo diferentes tipos de cambios (Estándar, Normal, Emergencia) siguen rutas de autorización distintas según su nivel de riesgo y urgencia.
            </p>
         </section>

      </PageLayout>
   );
};

export default ChangeManagement;
