import React from 'react';

const Ticker: React.FC = () => {
  return (
    <div className="bg-slate-900 py-6 md:py-10 overflow-hidden relative border-b border-slate-800">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-10 md:gap-20 items-center px-4 md:px-10">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-blue-400 flex items-center gap-2 md:gap-3"><i className="fa-solid fa-graduation-cap text-sm"></i> JD • MBA • LLM • M.ENG</span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-slate-400 flex items-center gap-2 md:gap-3"><i className="fa-solid fa-shield-halved text-sm"></i> CAPP & CIPP/C CERTIFIED</span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-blue-400 flex items-center gap-2 md:gap-3"><i className="fa-solid fa-gavel text-sm"></i> SUPREME COURT COUNSEL</span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-slate-400 flex items-center gap-2 md:gap-3"><i className="fa-solid fa-landmark text-sm"></i> BARRISTER & SOLICITOR</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
      `}</style>
    </div>
  );
};

export default Ticker;