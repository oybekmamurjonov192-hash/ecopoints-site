export default function EcoHeroArt() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-[#dfe6c6] bg-[radial-gradient(circle_at_top_left,rgba(191,202,120,0.55),transparent_32%),radial-gradient(circle_at_top_right,rgba(224,215,154,0.72),transparent_30%),linear-gradient(180deg,#ddd69e_0%,#d9cd8d_20%,#d8c98c_42%,#ced08b_62%,#c0bc73_100%)] p-4 shadow-eco lg:p-5">
      <div className="relative h-[360px] rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(250,247,228,0.28)_0%,rgba(240,236,201,0.18)_20%,rgba(209,210,152,0.12)_100%)] sm:h-[420px]">
        <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-forest-700 shadow-card">
          ✓
        </div>
        <div className="absolute right-8 top-10 rounded-full bg-white px-4 py-3 text-center text-[#4b5e52] shadow-card">
          <div className="text-lg font-bold text-[#263a2f]">+15</div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#6b7e73]">pts</div>
        </div>

        <div className="absolute inset-x-0 bottom-[5.3rem] h-16 bg-[linear-gradient(180deg,rgba(118,150,94,0),rgba(101,132,83,0.28))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,#aeb06d_0%,#9ba15e_100%)]" />

        <div className="absolute left-[12%] top-[8%] h-44 w-6 rounded-full bg-[#664f2e]" />
        <div className="absolute left-[73%] top-[8%] h-48 w-6 rounded-full bg-[#54442b]" />

        <div className="absolute left-[2%] top-[3%] h-40 w-44 rounded-full bg-[radial-gradient(circle,rgba(190,201,119,0.88)_0%,rgba(190,201,119,0.62)_58%,transparent_74%)]" />
        <div className="absolute left-[17%] top-[8%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(176,190,104,0.8)_0%,rgba(176,190,104,0.48)_62%,transparent_78%)]" />
        <div className="absolute right-[9%] top-[4%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(177,187,110,0.92)_0%,rgba(177,187,110,0.58)_60%,transparent_78%)]" />
        <div className="absolute right-[24%] top-[10%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(194,202,131,0.82)_0%,rgba(194,202,131,0.45)_60%,transparent_78%)]" />

        <div className="absolute inset-x-8 top-24 h-px bg-white/20" />

        {[
          { left: "18%", top: "52%", scale: "1" },
          { left: "32%", top: "56%", scale: "0.92" },
          { left: "52%", top: "51%", scale: "1.05" },
          { left: "72%", top: "55%", scale: "0.95" },
          { left: "22%", top: "72%", scale: "1" },
          { left: "61%", top: "73%", scale: "1.02" },
        ].map((figure, index) => (
          <div
            key={index}
            className="absolute"
            style={{ left: figure.left, top: figure.top, transform: `scale(${figure.scale})` }}
          >
            <div className="relative h-16 w-16">
              <div className="absolute left-6 top-0 h-4 w-4 rounded-full bg-[#2e3f31]" />
              <div className="absolute left-[1.8rem] top-4 h-7 w-2 rounded-full bg-[#3a503f]" />
              <div className="absolute left-3 top-9 h-5 w-10 rounded-full border-[3px] border-[#42594a]" />
              <div className="absolute left-2 top-11 h-2 w-14 rounded-full bg-[#526d54]" />
              <div className="absolute left-1 top-8 h-2 w-6 rotate-[-26deg] rounded-full bg-[#49614d]" />
              <div className="absolute right-1 top-8 h-2 w-6 rotate-[26deg] rounded-full bg-[#49614d]" />
            </div>
          </div>
        ))}

        <div className="absolute bottom-7 left-1/2 w-[170px] -translate-x-1/2 rounded-2xl bg-[#e7f1e7]/95 px-5 py-4 shadow-card backdrop-blur-sm">
          <div className="text-sm font-semibold leading-5 text-[#2f4638]">Community Clean-Up</div>
          <div className="mt-1 text-sm text-[#58705f]">Earned 120 pts</div>
        </div>
      </div>
    </div>
  );
}
