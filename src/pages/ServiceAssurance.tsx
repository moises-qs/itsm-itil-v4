import React from 'react';
import PageLayout from '../components/PageLayout';
import MermaidDiagram from '../components/MermaidDiagram';
import {
   ShieldCheck, Clock, Database, CheckSquare, TrendingUp, BarChart3,
   Activity, Zap, Server, HardDrive, Cpu, AlertTriangle, Target,
   Shield, Home, Building, Snowflake, Thermometer, FileText, Users
} from 'lucide-react';

const chart = `
graph TB
    subgraph Negocio["🎯 REQUISITOS DEL NEGOCIO"]
        BIA[Análisis de Impacto - BIA]
        RTO[RTO: Recovery Time]
        RPO[RPO: Recovery Point]
    end

    subgraph Prácticas["⚙️ PRÁCTICAS DE GARANTÍA"]
        Cap[💪 Capacidad y Desempeño]
        Avail[⏰ Disponibilidad]
        Cont[🛡️ Continuidad]
    end

    subgraph Resultados["✨ RESULTADOS"]
        Perf[Rendimiento Adecuado]
        Uptime[Tiempo Activo]
        Resil[Resiliencia ante Desastres]
    end

    BIA --> Cap
    BIA --> Avail
    BIA --> Cont

    Cap --> Perf
    Avail --> Uptime
    Cont --> Resil

    Perf --> Value[💎 Valor Co-creado]
    Uptime --> Value
    Resil --> Value

    style BIA fill:#fff3e0,stroke:#e65100,stroke-width:2px
    style Cap fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style Avail fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style Cont fill:#ffebee,stroke:#c62828,stroke-width:2px
    style Value fill:#fce4ec,stroke:#880e4f,stroke-width:3px
`;

const ServiceAssurance = () => {
   const availabilityLevels = [
      { level: '99%', downtime: '3.65 días/año', color: 'red' },
      { level: '99.9%', downtime: '8.76 horas/año', color: 'orange' },
      { level: '99.99%', downtime: '52.56 min/año', color: 'yellow' },
      { level: '99.999%', downtime: '5.26 min/año', color: 'green' }
   ];

   return (
      <PageLayout title="Garantía del Servicio" icon={<ShieldCheck />}>

         {/* Introducción */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <div className="space-y-6">
               <h2 className="text-3xl font-bold text-slate-800">Asegurando la Utilidad y Garantía</h2>

               <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <p className="text-lg text-slate-700">
                     En ITIL V4, el valor de un servicio se co-crea a través de dos componentes fundamentales:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                     <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-blue-800 mb-2">1. UTILIDAD</h3>
                        <p className="text-sm text-slate-700">Lo que hace el servicio (funcionalidad)</p>
                     </div>
                     <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-green-800 mb-2">2. GARANTÍA</h3>
                        <p className="text-sm text-slate-700">Cómo se desempeña el servicio (confiabilidad)</p>
                     </div>
                  </div>
               </div>

               <div className="bg-yellow-50 border border-yellow-400 p-5 rounded-lg">
                  <p className="text-slate-800 font-semibold text-center">
                     Las tres prácticas que veremos son <strong className="text-green-700">pilares de la garantía del servicio</strong>, asegurando que los servicios estén disponibles, tengan capacidad suficiente y puedan recuperarse ante desastres.
                  </p>
               </div>
            </div>
         </section>

         {/* Las 3 Prácticas - Vista General */}
         <section className="grid md:grid-cols-3 gap-6">
            {/* Capacidad */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-400 hover:shadow-2xl transition-all transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center mb-4">
                  <Database className="w-10 h-10 text-purple-700" />
               </div>
               <h3 className="text-2xl font-bold text-purple-900 mb-3">Capacidad</h3>
               <p className="text-slate-700 leading-relaxed">
                  Asegura que el servicio sea <strong>rápido y tenga espacio suficiente</strong>, ahora y en el futuro. Evita cuellos de botella mediante planificación basada en datos.
               </p>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-400 hover:shadow-2xl transition-all transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-10 h-10 text-blue-700" />
               </div>
               <h3 className="text-2xl font-bold text-blue-900 mb-3">Disponibilidad</h3>
               <p className="text-slate-700 leading-relaxed">
                  Garantiza que el servicio esté <strong>"ahí" cuando el cliente lo necesita</strong>. Se mide en porcentaje, como el famoso 99.9% de uptime.
               </p>
            </div>

            {/* Continuidad */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-400 hover:shadow-2xl transition-all transform hover:-translate-y-2">
               <div className="w-16 h-16 bg-red-200 rounded-2xl flex items-center justify-center mb-4">
                  <ShieldCheck className="w-10 h-10 text-red-700" />
               </div>
               <h3 className="text-2xl font-bold text-red-900 mb-3">Continuidad</h3>
               <p className="text-slate-700 leading-relaxed">
                  Es el <strong>plan B (o C)</strong>. Si hay un incendio o un ataque masivo, esta práctica garantiza que el negocio no muera. Recuperación ante desastres.
               </p>
            </div>
         </section>

         {/* Gestión de Capacidad y Desempeño */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Database className="w-7 h-7 text-purple-600" />
               </div>
               <h2 className="text-3xl font-bold text-slate-800">Gestión de la Capacidad y Desempeño</h2>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
               <p className="text-lg text-purple-900 italic">
                  "El propósito de la gestión de la capacidad y el desempeño es asegurar que los servicios actuales y futuros satisfagan la demanda de velocidad y almacenamiento de manera rentable."
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
               <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                     <Target className="w-5 h-5" />
                     Equilibrio Óptimo
                  </h3>
                  <p className="text-sm text-slate-700">
                     Costo vs. recursos. No sobre-aprovisionar (desperdicio) ni sub-aprovisionar (degradación del servicio).
                  </p>
               </div>

               <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                     <BarChart3 className="w-5 h-5" />
                     Planificación Basada en Datos
                  </h3>
                  <p className="text-sm text-slate-700">
                     Monitoreo constante, análisis de tendencias y proyecciones de crecimiento.
                  </p>
               </div>

               <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                     <TrendingUp className="w-5 h-5" />
                     Demanda Actual y Futura
                  </h3>
                  <p className="text-sm text-slate-700">
                     Respuesta a demanda actual, planificación futura y escalabilidad del servicio.
                  </p>
               </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
               <h3 className="font-bold text-slate-800 mb-4">Componentes de Capacidad</h3>
               <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                     <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Capacidad del Negocio
                     </h4>
                     <ul className="text-sm text-slate-700 space-y-1">
                        <li>• ¿Cuántos usuarios simultáneos?</li>
                        <li>• ¿Transacciones por segundo?</li>
                        <li>• ¿Volumen de datos a procesar?</li>
                     </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                     <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Capacidad del Servicio
                     </h4>
                     <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Performance de aplicaciones</li>
                        <li>• Tiempos de respuesta</li>
                        <li>• Throughput (capacidad de procesamiento)</li>
                     </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                     <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                        <Server className="w-4 h-4" />
                        Capacidad de Recursos
                     </h4>
                     <ul className="text-sm text-slate-700 space-y-1">
                        <li>• CPU, memoria, almacenamiento</li>
                        <li>• Ancho de banda de red</li>
                        <li>• Capacidad de base de datos</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-300">
               <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Métricas Clave de Capacidad
               </h3>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                     <Cpu className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                     <p className="font-bold text-slate-800">Utilización</p>
                     <p className="text-xs text-slate-600">% de uso de recursos</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                     <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                     <p className="font-bold text-slate-800">Throughput</p>
                     <p className="text-xs text-slate-600">Transacciones/segundo</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                     <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                     <p className="font-bold text-slate-800">Tiempo de Respuesta</p>
                     <p className="text-xs text-slate-600">Latencia de aplicaciones</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                     <BarChart3 className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                     <p className="font-bold text-slate-800">Costo por Unidad</p>
                     <p className="text-xs text-slate-600">Por transacción/usuario</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Gestión de Disponibilidad */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-blue-600" />
               </div>
               <h2 className="text-3xl font-bold text-slate-800">Gestión de la Disponibilidad</h2>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
               <p className="text-lg text-blue-900 mb-3">
                  <strong>DISPONIBILIDAD:</strong> <span className="italic">"La capacidad de un servicio de realizar su función cuando se requiere."</span>
               </p>
               <p className="text-blue-900 italic">
                  "El propósito de la gestión de la disponibilidad es asegurar que los servicios entreguen los niveles acordados de disponibilidad (uptime) para satisfacer las necesidades de clientes y usuarios."
               </p>
            </div>

            {/* Niveles de Disponibilidad */}
            <div className="mb-8">
               <h3 className="text-xl font-bold text-slate-800 mb-4">Niveles de Disponibilidad y Downtime Anual</h3>
               <div className="overflow-x-auto">
                  <table className="w-full border-collapse shadow-lg">
                     <thead>
                        <tr className="bg-blue-700 text-white">
                           <th className="border border-blue-600 px-6 py-4">Disponibilidad %</th>
                           <th className="border border-blue-600 px-6 py-4">Downtime por Año</th>
                           <th className="border border-blue-600 px-6 py-4">Downtime por Mes</th>
                           <th className="border border-blue-600 px-6 py-4">Nivel</th>
                        </tr>
                     </thead>
                     <tbody className="bg-white">
                        <tr className="hover:bg-red-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-center">99%</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">3.65 días</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">~7.2 horas</td>
                           <td className="border border-slate-300 px-6 py-3 text-center"><span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">Bajo</span></td>
                        </tr>
                        <tr className="hover:bg-orange-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-center">99.9%</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">8.76 horas</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">~43 minutos</td>
                           <td className="border border-slate-300 px-6 py-3 text-center"><span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">Medio</span></td>
                        </tr>
                        <tr className="hover:bg-yellow-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-center">99.99%</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">52.56 minutos</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">~4 minutos</td>
                           <td className="border border-slate-300 px-6 py-3 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">Alto</span></td>
                        </tr>
                        <tr className="hover:bg-green-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-center">99.999%</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">5.26 minutos</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">~26 segundos</td>
                           <td className="border border-slate-300 px-6 py-3 text-center"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Crítico</span></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Componentes de Disponibilidad */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
               <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                     <CheckSquare className="w-5 h-5" />
                     Confiabilidad
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">¿Con qué frecuencia falla el servicio?</p>
                  <div className="bg-white p-3 rounded-lg">
                     <p className="text-xs font-semibold text-green-900">MTBF (Mean Time Between Failures)</p>
                     <p className="text-xs text-slate-600">Tiempo promedio entre fallos</p>
                  </div>
               </div>

               <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                     <Zap className="w-5 h-5" />
                     Mantenibilidad
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">¿Qué tan rápido se puede restaurar?</p>
                  <div className="bg-white p-3 rounded-lg">
                     <p className="text-xs font-semibold text-blue-900">MTTR (Mean Time To Repair)</p>
                     <p className="text-xs text-slate-600">Tiempo promedio de reparación</p>
                  </div>
               </div>

               <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                     <FileText className="w-5 h-5" />
                     Facilidad de Servicio
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">¿Qué tan fácil es dar soporte?</p>
                  <div className="bg-white p-3 rounded-lg">
                     <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Calidad de documentación</li>
                        <li>• Acceso a repuestos</li>
                        <li>• Habilidades del personal</li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Técnicas para Mejorar Disponibilidad */}
            <div className="bg-slate-50 p-6 rounded-xl">
               <h3 className="font-bold text-slate-800 mb-4">Técnicas para Mejorar Disponibilidad</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                     <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-blue-800 mb-2">1. Redundancia</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Servidores en cluster (activo-activo/activo-pasivo)</li>
                           <li>• Múltiples enlaces de red</li>
                           <li>• Fuentes de poder redundantes</li>
                           <li>• Discos en RAID</li>
                        </ul>
                     </div>
                     <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-green-800 mb-2">2. Monitoreo Proactivo</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Alertas tempranas de degradación</li>
                           <li>• Monitoreo 24/7</li>
                           <li>• Dashboards en tiempo real</li>
                        </ul>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-purple-800 mb-2">3. Mantenimiento Preventivo</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Actualizaciones regulares</li>
                           <li>• Reemplazo proactivo de componentes</li>
                           <li>• Revisiones periódicas</li>
                        </ul>
                     </div>
                     <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-indigo-800 mb-2">4. Diseño Resiliente</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                           <li>• Arquitecturas tolerantes a fallos</li>
                           <li>• Balanceo de carga</li>
                           <li>• Auto-escalamiento</li>
                           <li>• Degradación elegante</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Gestión de Continuidad */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-red-600" />
               </div>
               <h2 className="text-3xl font-bold text-slate-800">Gestión de la Continuidad del Servicio</h2>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
               <p className="text-lg text-red-900 italic">
                  "El propósito de la gestión de la continuidad del servicio es garantizar que la organización pueda recuperar los servicios a niveles predefinidos después de un desastre o crisis mayor."
               </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-400 p-5 rounded-lg mb-8">
               <h3 className="font-bold text-yellow-900 mb-2">Diferencia clave:</h3>
               <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="flex items-start gap-2">
                     <CheckSquare className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                     <div>
                        <p className="font-semibold text-slate-800">Disponibilidad:</p>
                        <p className="text-sm text-slate-700">Fallos técnicos normales (servidor que se cae, error de software)</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-2">
                     <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                     <div>
                        <p className="font-semibold text-slate-800">Continuidad:</p>
                        <p className="text-sm text-slate-700">Eventos excepcionales que amenazan la operación total (desastres)</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* RTO y RPO */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
               <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-400">
                  <div className="flex items-center gap-3 mb-4">
                     <Clock className="w-10 h-10 text-blue-700" />
                     <h3 className="text-2xl font-bold text-blue-900">RTO</h3>
                  </div>
                  <h4 className="font-bold text-blue-800 mb-2">Recovery Time Objective</h4>
                  <p className="text-sm text-slate-700 mb-4 italic">
                     "Tiempo máximo aceptable para restaurar un servicio después de una interrupción"
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                     <p className="text-sm font-semibold text-blue-900 mb-2">Ejemplo:</p>
                     <p className="text-sm text-slate-700">
                        El servicio de facturación debe estar operativo en <strong>máximo 4 horas</strong> después de un desastre.
                     </p>
                  </div>
               </div>

               <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-400">
                  <div className="flex items-center gap-3 mb-4">
                     <Database className="w-10 h-10 text-green-700" />
                     <h3 className="text-2xl font-bold text-green-900">RPO</h3>
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Recovery Point Objective</h4>
                  <p className="text-sm text-slate-700 mb-4 italic">
                     "Cantidad máxima de datos que es aceptable perder, medida en tiempo"
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                     <p className="text-sm font-semibold text-green-900 mb-2">Ejemplo:</p>
                     <p className="text-sm text-slate-700">
                        Podemos tolerar perder <strong>máximo 1 hora</strong> de transacciones (backup cada hora).
                     </p>
                  </div>
               </div>
            </div>

            {/* Tabla de Criticidad */}
            <div className="mb-8">
               <h3 className="text-xl font-bold text-slate-800 mb-4">RTO y RPO según Criticidad</h3>
               <div className="overflow-x-auto">
                  <table className="w-full border-collapse shadow-lg">
                     <thead>
                        <tr className="bg-red-700 text-white">
                           <th className="border border-red-600 px-6 py-4">Criticidad del Servicio</th>
                           <th className="border border-red-600 px-6 py-4">RTO Típico</th>
                           <th className="border border-red-600 px-6 py-4">RPO Típico</th>
                        </tr>
                     </thead>
                     <tbody className="bg-white">
                        <tr className="hover:bg-red-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-red-800">Crítico</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">&lt; 1 hora</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">&lt; 15 minutos</td>
                        </tr>
                        <tr className="hover:bg-orange-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-orange-800">Alto</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">2-4 horas</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">1 hora</td>
                        </tr>
                        <tr className="hover:bg-yellow-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-yellow-800">Medio</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">8-24 horas</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">4 horas</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                           <td className="border border-slate-300 px-6 py-3 font-bold text-green-800">Bajo</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">48-72 horas</td>
                           <td className="border border-slate-300 px-6 py-3 text-center">24 horas</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Estrategias: Hot/Warm/Cold Sites */}
            <div className="bg-slate-50 p-6 rounded-xl">
               <h3 className="font-bold text-slate-800 mb-6 text-xl">Estrategias de Centro de Datos Alternativo</h3>

               <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-400">
                     <div className="flex items-center gap-2 mb-4">
                        <Thermometer className="w-8 h-8 text-red-700" />
                        <h4 className="text-xl font-bold text-red-900">Hot Site</h4>
                     </div>
                     <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg">
                           <p className="text-sm font-semibold text-red-800 mb-1">Características:</p>
                           <ul className="text-xs text-slate-700 space-y-1">
                              <li>• Centro completamente operativo</li>
                              <li>• Replicación en tiempo real</li>
                              <li>• Cambio en minutos/horas</li>
                           </ul>
                        </div>
                        <div className="flex items-center justify-between bg-red-100 p-3 rounded-lg">
                           <span className="text-xs font-semibold text-red-900">Costo:</span>
                           <span className="text-sm font-bold text-red-700">$$$$</span>
                        </div>
                        <div className="flex items-center justify-between bg-green-100 p-3 rounded-lg">
                           <span className="text-xs font-semibold text-green-900">Velocidad:</span>
                           <span className="text-sm font-bold text-green-700">⚡⚡⚡⚡</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-2 border-yellow-400">
                     <div className="flex items-center gap-2 mb-4">
                        <Thermometer className="w-8 h-8 text-yellow-700" />
                        <h4 className="text-xl font-bold text-yellow-900">Warm Site</h4>
                     </div>
                     <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg">
                           <p className="text-sm font-semibold text-yellow-800 mb-1">Características:</p>
                           <ul className="text-xs text-slate-700 space-y-1">
                              <li>• Infraestructura básica configurada</li>
                              <li>• Datos no en tiempo real</li>
                              <li>• Activación en horas</li>
                           </ul>
                        </div>
                        <div className="flex items-center justify-between bg-yellow-100 p-3 rounded-lg">
                           <span className="text-xs font-semibold text-yellow-900">Costo:</span>
                           <span className="text-sm font-bold text-yellow-700">$$$</span>
                        </div>
                        <div className="flex items-center justify-between bg-yellow-100 p-3 rounded-lg">
                           <span className="text-xs font-semibold text-yellow-900">Velocidad:</span>
                           <span className="text-sm font-bold text-yellow-700">⚡⚡⚡</span>
                        </div>
                     </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-400">
                     <div className="flex items-center gap-2 mb-4">
                        <Snowflake className="w-8 h-8 text-blue-700" />
                        <h4 className="text-xl font-bold text-blue-900">Cold Site</h4>
                     </div>
                     <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg">
                           <p className="text-sm font-semibold text-blue-800 mb-1">Características:</p>
                           <ul className="text-xs text-slate-700 space-y-1">
                              <li>• Solo espacio físico básico</li>
                              <li>• Sin equipos pre-instalados</li>
                              <li>• Activación en días</li>
                           </ul>
                        </div>
                        <div className="flex items-center justify-between bg-blue-100 p-3 rounded-lg">
                           <span className="text-xs font-semibold text-blue-900">Costo:</span>
                           <span className="text-sm font-bold text-blue-700">$$</span>
                        </div>
                        <div className="flex items-center justify-between bg-red-100 p-3 rounded-lg">
                           <span className="text-xs font-semibold text-red-900">Velocidad:</span>
                           <span className="text-sm font-bold text-red-700">⚡</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Fundamento Estratégico */}
         <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border-2 border-purple-400">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Target className="w-7 h-7 text-purple-600" />
               Fundamento Estratégico
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border-l-4 border-purple-600">
               <p className="text-lg text-purple-900 italic font-semibold">
                  "Se debe Planificar la capacidad y Diseñar la continuidad <strong>ANTES</strong> de que el servicio entre en operación."
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-3">Orden Correcto:</h3>
                  <ol className="space-y-2 text-sm text-slate-700">
                     <li className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">1.</span>
                        <span>Entender requisitos del negocio (BIA)</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">2.</span>
                        <span>Diseñar capacidad y disponibilidad requeridas</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">3.</span>
                        <span>Planificar continuidad ante desastres</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">4.</span>
                        <span>Implementar el servicio con estas garantías</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="font-bold text-purple-600">5.</span>
                        <span>Monitorear y mejorar continuamente</span>
                     </li>
                  </ol>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-indigo-800 mb-3">Fases de la Cadena de Valor:</h3>
                  <div className="space-y-3">
                     <div className="flex items-start gap-3">
                        <div className="px-3 py-1 bg-purple-600 text-white rounded text-xs font-bold mt-0.5">PLAN</div>
                        <p className="text-sm text-slate-700">Definir requisitos de garantía</p>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold mt-0.5">DESIGN</div>
                        <p className="text-sm text-slate-700">Diseñar servicios resilientes</p>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-bold mt-0.5">OBTAIN</div>
                        <p className="text-sm text-slate-700">Adquirir infraestructura adecuada</p>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="px-3 py-1 bg-green-600 text-white rounded text-xs font-bold mt-0.5">DELIVER</div>
                        <p className="text-sm text-slate-700">Monitoreo continuo</p>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="px-3 py-1 bg-yellow-600 text-white rounded text-xs font-bold mt-0.5">IMPROVE</div>
                        <p className="text-sm text-slate-700">Optimización constante</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Diagrama Mermaid */}
         <section className="pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <TrendingUp className="w-7 h-7 text-slate-600" />
               De la Práctica al Valor
            </h2>
            <MermaidDiagram chart={chart} />
            <p className="text-center text-sm text-gray-500 mt-4 max-w-3xl mx-auto">
               Este diagrama muestra cómo las prácticas de Capacidad, Disponibilidad y Continuidad se fundamentan en los requisitos del negocio (BIA) y generan valor a través de rendimiento, tiempo activo y resiliencia.
            </p>
         </section>

      </PageLayout>
   );
};

export default ServiceAssurance;
