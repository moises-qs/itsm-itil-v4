import { AttributeWheelItem } from '../types';

interface AttributeWheelProps {
  items: AttributeWheelItem[];
  centerTitle: string;
}

export default function AttributeWheel({ items, centerTitle }: AttributeWheelProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto ">
      <div className="relative aspect-square">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-white">
            <h3 className="text-white font-bold text-xl text-center px-4">
              {centerTitle}
            </h3>
          </div>
        </div>

        {items.map((item, index) => {
          const angle = (360 / items.length) * index - 90;
          const radians = (angle * Math.PI) / 180;
          const radius = 280;
          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div
                className={`w-56 p-5 rounded-xl shadow-xl ${item.color} backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300`}
              >
                <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
