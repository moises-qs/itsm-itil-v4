
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
   startOnLoad: true,
   theme: 'neutral',
   securityLevel: 'loose',
   fontFamily: 'Inter',
});

interface MermaidDiagramProps {
   chart: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const renderChart = async () => {
         if (ref.current && chart) {
            try {
               const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
               const { svg } = await mermaid.render(id, chart);
               if (ref.current) {
                  ref.current.innerHTML = svg;
               }
            } catch (error) {
               console.error('Mermaid render error:', error);
               if (ref.current) {
                  ref.current.innerHTML = `<div class="text-red-500 text-sm">Error rendering diagram</div>`;
               }
            }
         }
      };

      renderChart();
   }, [chart]);

   return <div ref={ref} className="mermaid w-full overflow-x-auto flex justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100" />;
};

export default MermaidDiagram;
