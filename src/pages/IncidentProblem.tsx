import React from 'react';
import PageLayout from '../components/PageLayout';
import MermaidDiagram from '../components/MermaidDiagram';
import {
   AlertCircle, Target, ArrowRight, Flame, Search, Clock, AlertTriangle,
   CheckCircle, TrendingUp, Layers, GitBranch, FileText, Wrench, Shield
} from 'lucide-react';

const chart = `
graph TB
    subgraph Incidentes["🔥 GESTIÓN DE INCIDENTES"]
        Inc[Incidente Reportado] --> Reg[Registro]
        Reg --> Class[Clasificación y Priorización]
        Class --> Diag1{¿Resolución<br/>Inmediata?}
        Diag1 -->|Sí| Sol[✅ Resolver]
        Diag1 -->|No| Esc[⬆️ Escalar]
        Esc --> Invest[Investigación]
        Invest --> Sol
        Sol --> Close[Cierre]
    end

    subgraph Problemas["🔍 GESTIÓN DE PROBLEMAS"]
        Trend[Análisis de Tendencias] --> Ident[Identificación Problema]
        Ident --> Prior[Priorización]
        Prior --> RCA[Análisis Causa Raíz]
        RCA --> WA[Workaround]
        RCA --> KE[Error Conocido]
        KE --> RFC[Solicitud de Cambio]
        RFC --> Fix[Solución Permanente]
    end

    Inc -.->|Incidentes<br/>Recurrentes| Trend
    WA -.->|Solución<br/>Temporal| Inc
    Fix -.->|Previene| Inc

    style Inc fill:#ffebee,stroke:#c62828,stroke-width:3px
    style Trend fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style Sol fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style Fix fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style WA fill:#fff8e1,stroke:#fbc02d,stroke-width:2px
    style RCA fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
`;

const IncidentProblem = () => {
   return (
      <PageLayout title="Incidentes y Problemas" icon={<AlertCircle />}>

         {/* Conceptos Fundamentales */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-600">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Conceptos Fundamentales</h2>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                     </div>
                     <h3 className="text-xl font-bold text-red-800">INCIDENTE</h3>
                  </div>
                  <blockquote className="border-l-4 border-red-600 pl-4 italic text-slate-700 mb-4">
                     "Una interrupción no planificada de un servicio, o reducción en la calidad de un servicio."
                  </blockquote>
                  <p className="text-sm text-slate-600">
                     Los incidentes tienen <strong>impacto inmediato en los usuarios</strong> y requieren atención urgente para restaurar el servicio normal.
                  </p>
               </div>

               <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-blue-600" />
                     </div>
                     <h3 className="text-xl font-bold text-blue-800">PROBLEMA</h3>
                  </div>
                  <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 mb-4">
                     "Una causa, o causa potencial, de uno o más incidentes."
                  </blockquote>
                  <p className="text-sm text-slate-600">
                     Los problemas son las <strong>causas subyacentes</strong> que generan esos incidentes y requieren investigación profunda.
                  </p>
               </div>
            </div>
         </section>

         {/* Comparación Bombero vs Detective */}
         <section className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Apagar Fuegos vs. Investigar el Crimen</h2>

            <div className="grid md:grid-cols-2 gap-8">
               {/* Gestión de Incidentes */}
               <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-300 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                        <Flame className="w-10 h-10 text-red-600" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-red-800 flex items-center gap-2">
                           Gestión de Incidentes
                        </h3>
                        <p className="text-red-700 font-semibold">Metáfora: "El Bombero"</p>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="bg-white p-4 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                           <Target className="w-4 h-4" />
                           Propósito
                        </h4>
                        <p className="text-sm text-slate-700">
                           Minimizar el impacto negativo mediante la <strong>restauración del funcionamiento normal del servicio lo más rápido posible</strong>.
                        </p>
                     </div>

                     <div className="bg-white p-4 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                           <Clock className="w-4 h-4" />
                           Enfoque
                        </h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Soluciones temporales (workarounds)</li>
                           <li>• Prioridad en velocidad</li>
                           <li>• Comunicación constante con usuarios</li>
                        </ul>
                     </div>

                     <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400">
                        <h4 className="font-bold text-yellow-800 mb-2">Ejemplo Práctico</h4>
                        <p className="text-sm text-slate-700">
                           Un servidor se cae cada viernes a las 3 PM. La gestión de incidentes se enfoca en <strong>reiniciar el servidor</strong> para que los usuarios vuelvan a trabajar inmediatamente.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Gestión de Problemas */}
               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <Search className="w-10 h-10 text-blue-600" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                           Gestión de Problemas
                        </h3>
                        <p className="text-blue-700 font-semibold">Metáfora: "El Detective"</p>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                           <Target className="w-4 h-4" />
                           Propósito
                        </h4>
                        <p className="text-sm text-slate-700">
                           Reducir la probabilidad e impacto de los incidentes mediante la <strong>identificación y gestión de las causas reales y potenciales</strong>.
                        </p>
                     </div>

                     <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                           <Search className="w-4 h-4" />
                           Enfoque
                        </h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Análisis de causa raíz (RCA)</li>
                           <li>• Soluciones definitivas</li>
                           <li>• Enfoque preventivo y de mejora continua</li>
                        </ul>
                     </div>

                     <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
                        <h4 className="font-bold text-green-800 mb-2">Ejemplo Práctico</h4>
                        <p className="text-sm text-slate-700">
                           Del mismo servidor: la gestión de problemas investiga <strong>por qué el servidor se cae cada viernes</strong> y descubre que necesita un parche de software para corregirlo definitivamente.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Tabla Comparativa */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <GitBranch className="w-7 h-7 text-purple-600" />
               Diferencias Clave entre Incidentes y Problemas
            </h2>

            <div className="overflow-x-auto">
               <table className="w-full border-collapse">
                  <thead>
                     <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Aspecto</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-red-700">Gestión de Incidentes</th>
                        <th className="border border-slate-300 px-4 py-3 text-left font-bold text-blue-700">Gestión de Problemas</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="hover:bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-700">Enfoque</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Reactivo - "Apagar incendios"</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Proactivo - "Prevenir incendios"</td>
                     </tr>
                     <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-700">Objetivo</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Restaurar servicio rápidamente</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Eliminar la causa raíz</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-700">Tiempo</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Respuesta inmediata</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Investigación más profunda</td>
                     </tr>
                     <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-700">Métodos</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Workarounds y soluciones temporales</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Análisis de causa raíz</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="border border-slate-300 px-4 py-3 font-semibold text-slate-700">Resultado</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Servicio restaurado</td>
                        <td className="border border-slate-300 px-4 py-3 text-sm">Problema eliminado o controlado</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>

         {/* Matriz de Priorización de Incidentes */}
         <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Layers className="w-7 h-7 text-orange-600" />
               Matriz de Priorización de Incidentes
            </h2>
            <p className="text-slate-600 mb-6">
               La priorización se basa en dos factores: <strong>Impacto</strong> (¿Cuántos usuarios afecta?) y <strong>Urgencia</strong> (¿Qué tan crítico es para el negocio?)
            </p>

            <div className="overflow-x-auto">
               <table className="w-full border-collapse shadow-lg">
                  <thead>
                     <tr className="bg-slate-700 text-white">
                        <th className="border border-slate-600 px-4 py-3">Impacto / Urgencia</th>
                        <th className="border border-slate-600 px-4 py-3">Alta Urgencia</th>
                        <th className="border border-slate-600 px-4 py-3">Media Urgencia</th>
                        <th className="border border-slate-600 px-4 py-3">Baja Urgencia</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white">
                     <tr>
                        <td className="border border-slate-300 px-4 py-3 font-bold bg-slate-100">Alto Impacto</td>
                        <td className="border border-slate-300 px-4 py-3 bg-red-100 text-red-800 font-bold text-center">Prioridad 1<br/>(Crítico)</td>
                        <td className="border border-slate-300 px-4 py-3 bg-orange-100 text-orange-800 font-bold text-center">Prioridad 2<br/>(Alto)</td>
                        <td className="border border-slate-300 px-4 py-3 bg-yellow-100 text-yellow-800 font-bold text-center">Prioridad 3<br/>(Medio)</td>
                     </tr>
                     <tr>
                        <td className="border border-slate-300 px-4 py-3 font-bold bg-slate-100">Medio Impacto</td>
                        <td className="border border-slate-300 px-4 py-3 bg-orange-100 text-orange-800 font-bold text-center">Prioridad 2<br/>(Alto)</td>
                        <td className="border border-slate-300 px-4 py-3 bg-yellow-100 text-yellow-800 font-bold text-center">Prioridad 3<br/>(Medio)</td>
                        <td className="border border-slate-300 px-4 py-3 bg-blue-100 text-blue-800 font-bold text-center">Prioridad 4<br/>(Bajo)</td>
                     </tr>
                     <tr>
                        <td className="border border-slate-300 px-4 py-3 font-bold bg-slate-100">Bajo Impacto</td>
                        <td className="border border-slate-300 px-4 py-3 bg-yellow-100 text-yellow-800 font-bold text-center">Prioridad 3<br/>(Medio)</td>
                        <td className="border border-slate-300 px-4 py-3 bg-blue-100 text-blue-800 font-bold text-center">Prioridad 4<br/>(Bajo)</td>
                        <td className="border border-slate-300 px-4 py-3 bg-green-100 text-green-800 font-bold text-center">Prioridad 5<br/>(Planificado)</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>

         {/* Fases de Gestión de Problemas */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Wrench className="w-7 h-7 text-blue-600" />
               Las 3 Fases de la Gestión de Problemas
            </h2>

            <div className="space-y-6">
               {/* Fase 1 */}
               <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                     </div>
                     <h3 className="text-xl font-bold text-blue-900">IDENTIFICACIÓN DE PROBLEMAS</h3>
                  </div>
                  <p className="text-slate-700 mb-3 font-semibold">Fuentes de identificación:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Análisis de tendencias de incidentes</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Detección de incidentes duplicados</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Análisis de incidentes mayores</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Información de proveedores/desarrolladores</span>
                     </li>
                  </ul>
               </div>

               {/* Fase 2 */}
               <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                     </div>
                     <h3 className="text-xl font-bold text-purple-900">CONTROL DE PROBLEMAS</h3>
                  </div>
                  <div className="space-y-3">
                     <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-purple-800 mb-2">Actividades principales:</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Priorización según riesgo (impacto + probabilidad)</li>
                           <li>• Análisis desde las 4 dimensiones de ITIL</li>
                           <li>• Análisis de causa raíz (RCA)</li>
                           <li>• Documentación de workarounds (soluciones temporales)</li>
                        </ul>
                     </div>
                     <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                        <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                           <FileText className="w-4 h-4" />
                           WORKAROUND
                        </h4>
                        <p className="text-sm text-slate-700 italic">
                           "Una solución que reduce o elimina el impacto de un incidente o problema para el cual todavía no se dispone de una resolución completa."
                        </p>
                     </div>
                  </div>
               </div>

               {/* Fase 3 */}
               <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-600">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                     </div>
                     <h3 className="text-xl font-bold text-green-900">CONTROL DE ERRORES</h3>
                  </div>
                  <div className="space-y-3">
                     <div className="bg-white p-4 rounded-lg border border-green-300">
                        <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                           <AlertTriangle className="w-4 h-4" />
                           ERROR CONOCIDO
                        </h4>
                        <p className="text-sm text-slate-700 italic mb-3">
                           "Un problema que ha sido analizado pero no ha sido resuelto."
                        </p>
                        <h5 className="font-semibold text-green-800 mb-2">Actividades:</h5>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Identificar posibles soluciones permanentes</li>
                           <li>• Evaluación costo-beneficio</li>
                           <li>• Generación de RFC (Request for Change)</li>
                           <li>• Re-evaluación regular del estado</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Relación con Otras Prácticas */}
         <section className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Shield className="w-7 h-7 text-indigo-600" />
               Relación con Otras Prácticas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                     <ArrowRight className="w-5 h-5" />
                     Con Control de Cambios
                  </h3>
                  <p className="text-sm text-slate-700">
                     Las soluciones permanentes a problemas generan RFCs (Solicitudes de Cambio). Control de cambios autoriza e implementa.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                     <ArrowRight className="w-5 h-5" />
                     Con Gestión del Conocimiento
                  </h3>
                  <p className="text-sm text-slate-700">
                     Workarounds y soluciones se documentan en la base de conocimiento para resolver futuros incidentes similares.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                     <ArrowRight className="w-5 h-5" />
                     Con Mejora Continua
                  </h3>
                  <p className="text-sm text-slate-700">
                     Las soluciones pueden tratarse como oportunidades de mejora, identificando mejoras en las 4 dimensiones.
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                     <ArrowRight className="w-5 h-5" />
                     Entre Sí (Incidentes ↔ Problemas)
                  </h3>
                  <p className="text-sm text-slate-700">
                     Complementarias pero potencialmente en conflicto. Investigar la causa puede demorar la restauración del servicio.
                  </p>
               </div>
            </div>
         </section>

         {/* Cadena de Valor */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <TrendingUp className="w-7 h-7 text-yellow-600" />
               Incidentes y Problemas en la Cadena de Valor
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-300">
                  <div className="flex items-center gap-2 mb-4">
                     <Flame className="w-8 h-8 text-red-600" />
                     <h3 className="text-xl font-bold text-red-900">Flujo de Incidentes</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                     <li className="flex items-start gap-2">
                        <div className="px-3 py-1 bg-purple-600 text-white rounded text-xs font-bold mt-1">ENGAGE</div>
                        <span>Captura inicial y comunicación con el usuario</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <div className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold mt-1">DELIVER</div>
                        <span>Resolución rápida y comunicación continua</span>
                     </li>
                     <li className="flex items-center gap-2 mt-4 text-red-800 font-bold">
                        <Clock className="w-5 h-5" />
                        Enfoque en velocidad de restauración
                     </li>
                  </ul>
               </div>

               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300">
                  <div className="flex items-center gap-2 mb-4">
                     <Search className="w-8 h-8 text-blue-600" />
                     <h3 className="text-xl font-bold text-blue-900">Flujo de Problemas</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                     <li className="flex items-start gap-2">
                        <div className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold mt-1">DELIVER</div>
                        <span>Análisis y desarrollo de soluciones</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <div className="px-3 py-1 bg-green-600 text-white rounded text-xs font-bold mt-1">IMPROVE</div>
                        <span>Mejora continua y prevención de errores</span>
                     </li>
                     <li className="flex items-center gap-2 mt-4 text-blue-800 font-bold">
                        <Shield className="w-5 h-5" />
                        Enfoque en estabilidad a largo plazo
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Diagrama de Flujo Mermaid */}
         <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <GitBranch className="w-7 h-7 text-slate-600" />
               Flujo Integrado de Incidentes y Problemas
            </h2>
            <MermaidDiagram chart={chart} />
            <p className="text-center text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
               Este diagrama ilustra cómo los incidentes recurrentes desencadenan la gestión de problemas, que busca soluciones temporales (workarounds) o permanentes (a través de cambios) para prevenir futuros incidentes.
            </p>
         </section>

      </PageLayout>
   );
};

export default IncidentProblem;
