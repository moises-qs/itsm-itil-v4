import React from 'react';
import PageLayout from '../components/PageLayout';
import MermaidDiagram from '../components/MermaidDiagram';
import {
   Headphones, CheckCircle, MessageSquare, Phone, Globe, Mail, Users,
   MessageCircle, Navigation, Heart, Brain, TrendingUp, Award, Target,
   Zap, Shield, Clock
} from 'lucide-react';

const chart = `
graph TD
    User((👤 Usuario)) -->|Contacta| SD[📞 Service Desk]
    SD -->|Clasifica| Cat{Tipo de Solicitud}
    Cat -->|Incidente| Inc[🔥 Gestión de Incidentes]
    Cat -->|Solicitud| Req[📋 Solicitud de Servicio]
    Inc -->|¿Puede resolver?| Res{Nivel 1}
    Res -->|Sí| Sol[✅ Solución Directa]
    Res -->|No| Esc[⬆️ Escalar Nivel 2/3]
    Esc -->|Soporte Especializado| Tech[🔧 Equipo Técnico]
    Tech -->|Resuelve| Back[↩️ Retorna a SD]
    Back -->|Informa| User
    Sol -->|Informa| User
    Req -->|Procesa| User

    style SD fill:#e3f2fd,stroke:#1565c0,stroke-width:3px
    style User fill:#fff3e0,stroke:#e65100,stroke-width:2px
    style Sol fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style Tech fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
`;

const ServiceDesk = () => {
   const canales = [
      { icon: <Phone />, nombre: 'Teléfono', descripcion: 'IVR, conferencias, reconocimiento de voz', color: 'blue' },
      { icon: <Globe />, nombre: 'Portal Web/App', descripcion: 'Autoservicio, catálogo, base de conocimiento', color: 'purple' },
      { icon: <MessageCircle />, nombre: 'Chat', descripcion: 'Chat en vivo, chatbots con IA', color: 'green' },
      { icon: <Mail />, nombre: 'Email', descripcion: 'Registro, actualizaciones, encuestas', color: 'red' },
      { icon: <Users />, nombre: 'Presencial', descripcion: 'Walk-in para picos de actividad', color: 'yellow' },
      { icon: <MessageSquare />, nombre: 'Redes Sociales', descripcion: 'WhatsApp, notificaciones importantes', color: 'indigo' }
   ];

   const habilidades = [
      { icon: <Heart />, titulo: 'Servicio al Cliente', descripcion: 'Actitud proactiva y orientación a satisfacción' },
      { icon: <Target />, titulo: 'Análisis y Priorización', descripcion: 'Evaluar impacto y tomar decisiones rápidas' },
      { icon: <MessageSquare />, titulo: 'Comunicación Efectiva', descripcion: 'Claridad verbal y escrita' },
      { icon: <Users />, titulo: 'Empatía', descripcion: 'Comprensión y manejo de situaciones difíciles' },
      { icon: <Brain />, titulo: 'Inteligencia Emocional', descripcion: 'Gestión de emociones propias y ajenas' }
   ];

   return (
      <PageLayout title="Service Desk" icon={<Headphones />}>

         {/* Definición y Propósito */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <div className="space-y-6">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                     <Headphones className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">El Punto de Entrada Estratégico</h2>
               </div>

               <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-lg text-slate-700 italic">
                     "El <strong>Service Desk</strong> es una práctica fundamental en ITIL V4 que actúa como el punto único de contacto (SPOC - Single Point of Contact) entre el proveedor de servicios y los usuarios."
                  </p>
               </div>

               <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed">
                     En ITIL v4, el <strong>Service Desk</strong> evoluciona más allá de ser un simple soporte técnico. Su propósito va más allá de simplemente "arreglar cosas"; se enfoca en capturar la demanda y gestionar la resolución de incidentes y solicitudes de servicio de manera efectiva.
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm border border-blue-200">
                     <div className="flex items-center gap-2 text-blue-800 font-bold mb-3">
                        <TrendingUp className="w-5 h-5" />
                        Comprender la Demanda
                     </div>
                     <p className="text-sm text-slate-700">
                        Analizar y entender las necesidades de resolución de incidentes y solicitudes de servicio
                     </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm border border-purple-200">
                     <div className="flex items-center gap-2 text-purple-800 font-bold mb-3">
                        <Users className="w-5 h-5" />
                        Punto de Contacto
                     </div>
                     <p className="text-sm text-slate-700">
                        Ser la interfaz principal entre el proveedor de servicios y todos sus usuarios
                     </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200">
                     <div className="flex items-center gap-2 text-green-800 font-bold mb-3">
                        <Navigation className="w-5 h-5" />
                        Ruta Clara
                     </div>
                     <p className="text-sm text-slate-700">
                        Proporcionar un camino claro para reportar, clasificar y resolver asuntos
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Canales de Contacto */}
         <section className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <MessageCircle className="w-7 h-7 text-purple-600" />
               Canales de Contacto Omnicanal
            </h2>
            <p className="text-slate-600 mb-8">
               El Service Desk moderno debe ofrecer múltiples canales de comunicación para adaptarse a las preferencias de los usuarios:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {canales.map((canal, idx) => (
                  <div
                     key={idx}
                     className={`bg-white p-6 rounded-xl border-2 border-${canal.color}-200 hover:border-${canal.color}-400 transition-all hover:shadow-lg transform hover:-translate-y-1`}
                  >
                     <div className={`w-12 h-12 bg-${canal.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                        <div className={`text-${canal.color}-600`}>
                           {React.cloneElement(canal.icon as React.ReactElement, { className: "w-6 h-6" })}
                        </div>
                     </div>
                     <h3 className="font-bold text-slate-800 mb-2">{canal.nombre}</h3>
                     <p className="text-sm text-slate-600">{canal.descripcion}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* Habilidades del Personal */}
         <section className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Award className="w-7 h-7 text-yellow-600" />
               Habilidades del Personal del Service Desk
            </h2>
            <p className="text-slate-600 mb-8">
               El personal del Service Desk requiere capacitación y competencia en diversas áreas clave:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
               {habilidades.map((hab, idx) => (
                  <div key={idx} className="flex gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-purple-300 transition-all">
                     <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                           {React.cloneElement(hab.icon as React.ReactElement, { className: "w-6 h-6 text-purple-600" })}
                        </div>
                     </div>
                     <div>
                        <h3 className="font-bold text-slate-800 mb-1">{hab.titulo}</h3>
                        <p className="text-sm text-slate-600">{hab.descripcion}</p>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Funciones Clave */}
         <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Zap className="w-7 h-7 text-indigo-600" />
               Funciones Clave del Service Desk Moderno
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                     <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        1. Omnicanalidad
                     </h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>✓ Recepción por múltiples canales</li>
                        <li>✓ Gestión unificada de solicitudes</li>
                        <li>✓ Experiencia consistente sin importar el canal</li>
                     </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                     <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <Navigation className="w-5 h-5" />
                        2. Clasificación y Enrutamiento
                     </h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>✓ Filtro inicial que categoriza la demanda</li>
                        <li>✓ Deriva al flujo de valor correcto</li>
                        <li>✓ Asegura llegada al equipo apropiado</li>
                     </ul>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                     <h3 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        3. Empatía y Comunicación
                     </h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>✓ Cara visible de TI ante los usuarios</li>
                        <li>✓ Experiencia del usuario depende de esta interacción</li>
                        <li>✓ Mantiene informados sobre el estado</li>
                     </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                     <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        4. Coordinación y Seguimiento
                     </h3>
                     <ul className="space-y-2 text-sm text-slate-700">
                        <li>✓ Responsable del ciclo de vida completo</li>
                        <li>✓ Coordina con equipos de segundo y tercer nivel</li>
                        <li>✓ Verifica satisfacción antes de cerrar</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* Cadena de Valor */}
         <section className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <TrendingUp className="w-7 h-7 text-green-600" />
               Service Desk en la Cadena de Valor
            </h2>
            <p className="text-slate-600 mb-8">
               El Service Desk participa activamente en dos actividades principales de la Cadena de Valor:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold text-sm">
                        ENGAGE
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Involucrar</h3>
                  <ul className="space-y-2 text-slate-700">
                     <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">▸</span>
                        <span>Captura inicial de la demanda</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">▸</span>
                        <span>Comunicación constante con el usuario</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">▸</span>
                        <span>Primer punto de contacto para todas las solicitudes</span>
                     </li>
                  </ul>
               </div>

               <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border-2 border-indigo-300">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm">
                        DELIVER & SUPPORT
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">Entregar y Soportar</h3>
                  <ul className="space-y-2 text-slate-700">
                     <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">▸</span>
                        <span>Resolución directa de consultas de primer nivel</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">▸</span>
                        <span>Coordinación para resolver incidentes complejos</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">▸</span>
                        <span>Seguimiento hasta el cierre satisfactorio</span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         {/* Valor que Entrega */}
         <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <Shield className="w-7 h-7 text-yellow-600" />
               Valor que Entrega a la Organización
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                     <TrendingUp className="w-5 h-5" />
                     Función Estratégica
                  </h3>
                  <p className="text-sm text-slate-700">
                     Reduce costos de soporte e identifica oportunidades de mejora continua
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                     <Heart className="w-5 h-5" />
                     Mejora la Satisfacción
                  </h3>
                  <p className="text-sm text-slate-700">
                     Enfoque en calidad de servicio a largo plazo y experiencia del usuario
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                     <Clock className="w-5 h-5" />
                     Visibilidad del Servicio
                  </h3>
                  <p className="text-sm text-slate-700">
                     Proporciona datos e información para la toma de decisiones informadas
                  </p>
               </div>

               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                     <Users className="w-5 h-5" />
                     Punto de Integración
                  </h3>
                  <p className="text-sm text-slate-700">
                     Coordina entre diferentes áreas internas y proveedores externos
                  </p>
               </div>
            </div>
         </section>

         {/* Aspectos Clave */}
         <section className="bg-slate-100 p-8 rounded-2xl border border-slate-300">
            <h2 className="text-xl font-bold text-slate-800 mb-6">💡 Aspectos Clave del Service Desk</h2>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-700">No requiere ser altamente técnico: se enfoca en personas y negocios</p>
               </div>
               <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-700">Es una parte vital de cualquier operación de servicio moderna</p>
               </div>
               <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-700">Organiza, explica y coordina diversos asuntos, más allá de solo arreglar tecnología</p>
               </div>
               <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-700">Tiene gran influencia en la experiencia del usuario y percepción del proveedor</p>
               </div>
            </div>
         </section>

         {/* Diagrama Técnico (Mermaid) */}
         <section className="mt-12">
            <h3 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-2">
               <Navigation className="w-7 h-7 text-slate-500" />
               Flujo de Atención del Service Desk
            </h3>
            <MermaidDiagram chart={chart} />
            <p className="text-center text-sm text-gray-500 mt-4">
               Diagrama: Flujo de clasificación y enrutamiento de solicitudes en el Service Desk
            </p>
         </section>
      </PageLayout>
   );
};

export default ServiceDesk;
