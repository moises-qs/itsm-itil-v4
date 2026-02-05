import React from 'react';
import PageLayout from '../components/PageLayout';
import MermaidDiagram from '../components/MermaidDiagram';
import {
   Lightbulb, CheckCircle, RefreshCcw, Handshake, TrendingUp, Shield,
   Target, Zap, Layers, GitBranch, AlertCircle, Activity, Users, Award
} from 'lucide-react';

const chart = `
graph TB
    subgraph Prácticas["🔧 PRÁCTICAS ITIL V4"]
        SD[Service Desk<br/>📞 Captura Demanda]
        Inc[Gestión de Incidentes<br/>🔥 Velocidad]
        Prob[Gestión de Problemas<br/>🔍 Causa Raíz]
        Change[Gestión de Cambios<br/>⚙️ Habilitación]
        Cap[Capacidad<br/>💪 Rendimiento]
        Avail[Disponibilidad<br/>⏰ Uptime]
        Cont[Continuidad<br/>🛡️ Resiliencia]
    end

    subgraph SVC["🔄 CADENA DE VALOR"]
        Engage[Involucrar]
        Design[Diseñar y Transicionar]
        Deliver[Entregar y Soportar]
        Improve[Mejorar]
    end

    SD --> Engage
    SD --> Deliver
    Inc --> Engage
    Inc --> Deliver
    Prob --> Deliver
    Prob --> Improve
    Change --> Design
    Cap --> Design
    Avail --> Design
    Cont --> Design

    Engage --> Value[💎 VALOR<br/>CO-CREADO]
    Design --> Value
    Deliver --> Value
    Improve --> Value

    Value -.->|Mejora Continua| SD

    style SD fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style Inc fill:#ffebee,stroke:#c62828,stroke-width:2px
    style Prob fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style Change fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style Value fill:#fff3e0,stroke:#e65100,stroke-width:3px
`;

const Conclusions = () => {
   return (
      <PageLayout title="Conclusiones" icon={<Lightbulb />}>

         {/* Introducción */}
         <section className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border-2 border-purple-300 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
               <Lightbulb className="w-10 h-10 text-yellow-600" />
               <h2 className="text-3xl font-bold text-slate-800">Reflexiones Finales sobre ITIL V4</h2>
            </div>
            <p className="text-lg text-slate-700 italic">
               El estudio de estas prácticas de ITIL V4 nos muestra que la gestión moderna de servicios TI requiere una comprensión holística, enfoque en valor, flexibilidad, equilibrio, colaboración y mejora continua.
            </p>
         </section>

         {/* Conclusión 1 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <RefreshCcw className="w-7 h-7 text-blue-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">1. De Procesos a Valor: El Cambio de Paradigma de ITIL 4</h2>
            </div>

            <div className="space-y-6">
               <p className="text-slate-700 leading-relaxed">
                  ITIL 4 representa un cambio fundamental en la filosofía de gestión de servicios TI. Ya no se trata simplemente de "gestionar procesos" de manera rígida y secuencial, sino de <strong className="text-blue-600">co-crear valor</strong> a través de la <strong className="text-blue-600">Cadena de Valor del Servicio</strong>.
               </p>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-xl border-2 border-red-300">
                     <h3 className="font-bold text-red-800 mb-3">Antes (ITIL v3)</h3>
                     <p className="text-sm text-slate-700">
                        Enfoque en procesos lineales y cumplimiento de procedimientos
                     </p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
                     <h3 className="font-bold text-green-800 mb-3">Ahora (ITIL 4)</h3>
                     <p className="text-sm text-slate-700">
                        Enfoque en creación de valor, flexibilidad y colaboración
                     </p>
                  </div>
               </div>

               <div className="bg-blue-50 p-5 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-blue-900 mb-3">Este cambio se refleja en todas las prácticas:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>El <strong>Service Desk</strong> ya no es solo un "receptor de llamadas", sino el punto estratégico de <strong>captura de demanda</strong></span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>La <strong>Gestión de Cambios</strong> ya no busca "controlar" sino <strong>habilitar</strong> cambios seguros</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Todas las prácticas se integran en un <strong>flujo continuo de valor</strong></span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Conclusión 2 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Layers className="w-7 h-7 text-purple-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">2. Interconexión: Ninguna Práctica Funciona en Aislamiento</h2>
            </div>

            <div className="space-y-6">
               <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <p className="text-lg text-purple-900 font-semibold">
                     Una lección fundamental es que <strong>ninguna práctica de ITIL 4 funciona de forma independiente</strong>. Todas están interconectadas y se apoyan mutuamente.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl border border-purple-200 shadow-sm">
                     <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        El Service Desk alimenta a Incidentes
                     </h3>
                     <p className="text-sm text-slate-700">
                        Cada reporte del usuario se convierte en un registro de incidente. Sin Service Desk efectivo, no hay punto de entrada para Incidentes.
                     </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-purple-200 shadow-sm">
                     <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Incidentes alimenta a Problemas
                     </h3>
                     <p className="text-sm text-slate-700">
                        El análisis de tendencias de incidentes identifica problemas. Sin gestión de incidentes sólida, es imposible hacer gestión de problemas efectiva.
                     </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-purple-200 shadow-sm">
                     <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                        <GitBranch className="w-5 h-5" />
                        Problemas alimenta a Cambios
                     </h3>
                     <p className="text-sm text-slate-700">
                        Las soluciones permanentes a problemas requieren cambios. El ciclo se cierra: Service Desk → Incidentes → Problemas → Cambios → (potencialmente nuevos incidentes).
                     </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-purple-200 shadow-sm">
                     <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Capacidad, Disponibilidad y Continuidad son transversales
                     </h3>
                     <p className="text-sm text-slate-700">
                        Soportan todas las demás prácticas. Sin capacidad adecuada, habrá más incidentes. Sin disponibilidad, el Service Desk colapsa.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Conclusión 3 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Zap className="w-7 h-7 text-orange-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">3. Equilibrio: Velocidad de Restauración vs. Estabilidad a Largo Plazo</h2>
            </div>

            <div className="space-y-6">
               <p className="text-slate-700 leading-relaxed">
                  Una gestión exitosa requiere <strong>equilibrar dos fuerzas aparentemente opuestas</strong>:
               </p>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-300">
                     <div className="flex items-center gap-2 mb-4">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                        <h3 className="text-xl font-bold text-red-900">Gestión de Incidentes</h3>
                     </div>
                     <h4 className="font-bold text-red-800 mb-2">→ VELOCIDAD</h4>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Necesidad de restaurar el servicio inmediatamente</li>
                        <li>• Presión de usuarios y negocio</li>
                        <li>• Enfoque en "apagar incendios"</li>
                     </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300">
                     <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-900">Gestión de Problemas</h3>
                     </div>
                     <h4 className="font-bold text-blue-800 mb-2">→ ESTABILIDAD</h4>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Necesidad de entender causas raíz</li>
                        <li>• Inversión de tiempo en análisis</li>
                        <li>• Prevención de incidentes futuros</li>
                     </ul>
                  </div>
               </div>

               <div className="bg-yellow-50 border border-yellow-400 p-5 rounded-lg">
                  <h3 className="font-bold text-yellow-900 mb-3">💡 La solución:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                        <span>Gestión de Incidentes rápida Y efectiva</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                        <span>Análisis paralelo de problemas para causas recurrentes</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                        <span>Recursos dedicados a cada una (no los mismos técnicos en ambas)</span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Conclusión 4 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <RefreshCcw className="w-7 h-7 text-green-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">4. Adaptabilidad: La Cadena de Valor Permite Flexibilidad</h2>
            </div>

            <div className="space-y-6">
               <p className="text-slate-700 leading-relaxed">
                  La <strong>Cadena de Valor del Servicio</strong> no es un proceso lineal rígido, sino un modelo flexible que permite <strong>combinar estas prácticas en diferentes flujos</strong> para adaptarse a la demanda del negocio.
               </p>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-5 rounded-xl border border-green-300">
                     <h3 className="font-bold text-green-800 mb-3">Flujo 1: Incidente Simple</h3>
                     <p className="text-sm text-slate-700 font-mono bg-white p-3 rounded border border-green-200">
                        Involucrar → Entregar y Soportar → (resuelto por Service Desk)
                     </p>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-300">
                     <h3 className="font-bold text-blue-800 mb-3">Flujo 2: Incidente Complejo</h3>
                     <p className="text-sm text-slate-700 font-mono bg-white p-3 rounded border border-blue-200">
                        Involucrar → Entregar y Soportar → (escalamiento) → Entregar y Soportar
                     </p>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-300">
                     <h3 className="font-bold text-purple-800 mb-3">Flujo 3: Problema que requiere cambio</h3>
                     <p className="text-sm text-slate-700 font-mono bg-white p-3 rounded border border-purple-200">
                        Involucrar → Entregar → Mejorar → Diseño y Transición → Entregar
                     </p>
                  </div>

                  <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-300">
                     <h3 className="font-bold text-indigo-800 mb-3">Flujo 4: Servicio nuevo</h3>
                     <p className="text-sm text-slate-700 font-mono bg-white p-3 rounded border border-indigo-200">
                        Planear → Diseño y Transición → Obtener/Construir → Entregar y Soportar
                     </p>
                  </div>
               </div>

               <div className="bg-green-50 border border-green-400 p-5 rounded-lg">
                  <p className="text-green-900 font-semibold text-center">
                     Esta <strong>adaptabilidad</strong> es lo que hace a ITIL 4 aplicable a organizaciones ágiles, DevOps, y contextos modernos.
                  </p>
               </div>
            </div>
         </section>

         {/* Conclusión 5 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Target className="w-7 h-7 text-yellow-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">5. Enfoque en el Valor: Todo debe Justificarse</h2>
            </div>

            <div className="space-y-6">
               <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <p className="text-lg text-yellow-900 font-semibold">
                     ITIL 4 es enfático: <strong>cada actividad debe justificarse por el valor que genera</strong> para el cliente y la organización.
                  </p>
               </div>

               <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-bold text-slate-800 mb-4">Preguntas Críticas:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                     <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-700">¿Esta práctica está creando <strong>valor</strong> o solo agregando <strong>burocracia</strong>?</p>
                     </div>
                     <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-700">¿El control de cambios está <strong>habilitando</strong> o <strong>bloqueando</strong>?</p>
                     </div>
                     <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-700">¿El Service Desk está mejorando la <strong>experiencia del usuario</strong>?</p>
                     </div>
                     <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <p className="text-sm text-slate-700">¿La gestión de capacidad está <strong>optimizando costos</strong>?</p>
                     </div>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-xl border-2 border-red-300">
                     <h3 className="font-bold text-red-800 mb-3">❌ Anti-patrones a evitar:</h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Implementar ITIL "por cumplir" sin entender el valor</li>
                        <li>• Procesos rígidos que retrasan el negocio</li>
                        <li>• Métricas vanidosas (cantidad de tickets) vs métricas de valor</li>
                     </ul>
                  </div>

                  <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
                     <h3 className="font-bold text-green-800 mb-3">✅ Enfoque correcto:</h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Implementar solo lo que agrega valor</li>
                        <li>• Simplificar cuando sea posible</li>
                        <li>• Medir resultados de negocio, no solo métricas técnicas</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* Conclusión 6 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-indigo-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">6. Mejora Continua: El Motor que Impulsa Todo</h2>
            </div>

            <div className="space-y-6">
               <p className="text-slate-700 leading-relaxed">
                  Aunque no fue una práctica dedicada en este trabajo, la <strong>Mejora Continua</strong> es el <strong>principio transversal</strong> que debe impregnar todas las prácticas:
               </p>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                     <p className="text-sm text-slate-700">
                        <strong className="text-blue-800">Service Desk:</strong> Mejorar experiencia del usuario
                     </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                     <p className="text-sm text-slate-700">
                        <strong className="text-red-800">Incidentes:</strong> Reducir tiempos de resolución
                     </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                     <p className="text-sm text-slate-700">
                        <strong className="text-purple-800">Problemas:</strong> Prevenir más incidentes
                     </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                     <p className="text-sm text-slate-700">
                        <strong className="text-green-800">Cambios:</strong> Hacerse más ágil sin perder control
                     </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                     <p className="text-sm text-slate-700">
                        <strong className="text-yellow-800">Capacidad:</strong> Optimización constante
                     </p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                     <p className="text-sm text-slate-700">
                        <strong className="text-indigo-800">Disponibilidad:</strong> Mejorar uptime continuamente
                     </p>
                  </div>
               </div>

               <div className="bg-indigo-100 p-6 rounded-xl border-2 border-indigo-400">
                  <p className="text-center text-indigo-900 font-semibold text-lg">
                     El ciclo nunca termina: <br/>
                     <span className="font-mono text-sm">Implementar → Medir → Analizar → Mejorar → Implementar → ...</span>
                  </p>
               </div>
            </div>
         </section>

         {/* Conclusión 7 */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-600">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-teal-600" />
               </div>
               <h2 className="text-2xl font-bold text-slate-800">7. Alineación con el Negocio: TI como Socio Estratégico</h2>
            </div>

            <div className="space-y-6">
               <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
                  <p className="text-lg text-teal-900 font-semibold">
                     ITIL 4 refuerza que <strong>TI no es solo un soporte técnico, sino un socio estratégico del negocio</strong>
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl border border-teal-200 shadow-sm">
                     <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
                     <p className="text-sm text-slate-700">
                        <strong>Service Desk</strong> entiende las necesidades del negocio, no solo problemas técnicos
                     </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-teal-200 shadow-sm">
                     <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
                     <p className="text-sm text-slate-700">
                        <strong>Control de Cambios</strong> equilibra velocidad del negocio con gestión de riesgos
                     </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-teal-200 shadow-sm">
                     <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
                     <p className="text-sm text-slate-700">
                        <strong>Gestión de Capacidad</strong> planifica según crecimiento del negocio
                     </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-teal-200 shadow-sm">
                     <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
                     <p className="text-sm text-slate-700">
                        <strong>Gestión de Continuidad</strong> protege la viabilidad del negocio
                     </p>
                  </div>
               </div>

               <div className="bg-teal-100 p-6 rounded-xl border-2 border-teal-400">
                  <p className="text-center text-teal-900 font-bold text-lg">
                     TI exitoso no es el que tiene la mejor tecnología, sino el que <strong>habilita los resultados del negocio</strong> de la forma más efectiva.
                  </p>
               </div>
            </div>
         </section>

         {/* Reflexión Final */}
         <section className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl border-2 border-purple-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
               <Award className="w-12 h-12 text-purple-700" />
               <h2 className="text-3xl font-bold text-slate-900">Reflexión Final</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
               <p className="text-lg text-slate-800 leading-relaxed mb-4">
                  El estudio de estas prácticas de ITIL V4 nos muestra que la gestión moderna de servicios TI requiere:
               </p>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                     <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                     <div>
                        <p className="font-bold text-purple-900">Visión holística</p>
                        <p className="text-sm text-slate-600">Entender cómo se conectan las piezas</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-2">
                     <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                     <div>
                        <p className="font-bold text-blue-900">Enfoque en valor</p>
                        <p className="text-sm text-slate-600">Justificar cada actividad</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-2">
                     <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                     <div>
                        <p className="font-bold text-green-900">Flexibilidad</p>
                        <p className="text-sm text-slate-600">Adaptar al contexto</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-2">
                     <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                     <div>
                        <p className="font-bold text-yellow-900">Equilibrio</p>
                        <p className="text-sm text-slate-600">Velocidad y estabilidad</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-2">
                     <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                     <div>
                        <p className="font-bold text-red-900">Colaboración</p>
                        <p className="text-sm text-slate-600">Entre equipos y con el negocio</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-2">
                     <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">6</div>
                     <div>
                        <p className="font-bold text-indigo-900">Mejora continua</p>
                        <p className="text-sm text-slate-600">Nunca conformarse</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl text-white text-center">
               <p className="text-xl font-bold mb-3">
                  ITIL 4 no es un conjunto de reglas rígidas...
               </p>
               <p className="text-lg">
                  Es un <strong>marco flexible y adaptable</strong> que, cuando se implementa correctamente, transforma TI de un centro de costos a un <strong>generador de valor estratégico</strong> para la organización.
               </p>
            </div>
         </section>

      </PageLayout>
   );
};

export default Conclusions;
