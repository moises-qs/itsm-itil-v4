
import React from 'react';

interface PageLayoutProps {
   title: string;
   icon?: React.ReactNode;
   children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, icon, children }) => {
   return (
      <div className="animate-fade-in space-y-8 max-w-6xl mx-auto py-8 px-4">
         <header className="bg-gradient-to-r from-white to-slate-50 rounded-2xl shadow-sm p-8 border border-slate-200">
            <div className="flex items-center gap-6">
               {icon && (
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl text-purple-600 shadow-sm">
                     {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 md:w-10 md:h-10" })}
                  </div>
               )}
               <h1 className="text-3xl font-extrabold text-slate-900 md:text-5xl tracking-tight leading-tight">
                  {title}
               </h1>
            </div>
         </header>
         <main className="space-y-12">
            {children}
         </main>
      </div>
   );
};

export default PageLayout;
