import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto py-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {event.year}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {event.version}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

          <div className="w-5/12"></div>
        </div>
      ))}
    </div>
  );
}
