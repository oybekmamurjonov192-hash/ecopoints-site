import { ArrowRight, Bike, Leaf, Recycle, Sprout, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import EcoHeroArt from "@/components/EcoHeroArt";

const featureCards = [
  {
    title: "Qayta ishlash",
    description: "Chiqindilarni kuzatib boring va mas’uliyatli qayta ishlash uchun ballaringizni oling.",
    icon: Recycle,
    accent: "bg-[linear-gradient(135deg,#8aac67,#5f8d54)]",
  },
  {
    title: "Quvat manbai",
    description: "Energiya iste’molining kamaytirilishini qayd eting va uni mukofotlarga aylantiring.",
    icon: Zap,
    accent: "bg-[linear-gradient(135deg,#5f9987,#41756a)]",
  },
  {
    title: "Foydali transport",
    description: "Velosipedda yurish va jamoat transportida safarlar bonus ballar olib keladi.",
    icon: Bike,
    accent: "bg-[linear-gradient(135deg,#d9d6b1,#9aa36a)]",
  },
];

const stepCards = [
  {
    title: "1. Ishlash",
    description: "Har kuni qilgan ekologik harakatlaringizni mobil ilova yoki veb-portaldan yozib boring.",
  },
  {
    title: "2. Ballar yig'ing",
    description: "Ballar sizning qilgan ishlaringizning ta’siri va tasdiqlangan faoliyatlar asosida hisoblanadi.",
  },
  {
    title: "3. Mukofotlarga almashtiring",
    description: "Ballaring mukofot va chegirmalarga almashtiring.",
  },
];

export default function Index() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-[1180px] px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          <div className="max-w-[560px]">
            <h1 className="max-w-[12ch] text-5xl font-extrabold leading-[1.04] tracking-[-0.04em] text-[#173326] sm:text-6xl lg:text-[4.25rem]">
              Sizning harakatlaringiz mukofotga sazovor!
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f7467] sm:text-xl">
              Chiqindini oling kerakli joyga tashlang va chegirmalar, pullar, mukofotlar qo'lga kiriting!
            </p>

            <div className="mt-8 flex flex-col gap-3 rounded-[1.5rem] border border-[#e6ede1] bg-white p-3 shadow-card sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email to join"
                className="h-12 flex-1 rounded-full border border-transparent bg-[#f7faf4] px-5 text-sm text-[#274134] outline-none placeholder:text-[#9aa99f] focus:border-[#c8d9c6]"
              />
              <Link
                to="/get-started"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-eco transition-transform hover:-translate-y-0.5"
              >
                Boshlash
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-[#365142] transition-colors hover:text-forest-700"
              >
                Qanday ishlaydi?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 flex flex-col gap-4 rounded-[1.6rem] border border-[#edf2e8] bg-white px-4 py-4 shadow-card sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "bg-[linear-gradient(135deg,#739b5a,#a8c181)]",
                    "bg-[linear-gradient(135deg,#5c7f63,#8fb08b)]",
                    "bg-[linear-gradient(135deg,#d4d8aa,#98a76d)]",
                    "bg-[linear-gradient(135deg,#547667,#93ac83)]",
                  ].map((swatch, index) => (
                    <div
                      key={index}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 border-white text-white shadow-sm ${swatch}`}
                    >
                      <Leaf className="h-4 w-4" />
                    </div>
                  ))}
                </div>
                <p className="max-w-[14rem] text-sm font-medium leading-6 text-[#4f6658]">
                  Chiqindini to'g'ri joyga tashlash orqali tabiatga foyda keltiring va boshqalarga o'rnak bo'ling.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-forest-50 px-4 py-2 text-sm font-semibold text-forest-700">
                <Sprout className="h-4 w-4" />
                50,000 dan ortiq ekologik harakatlar kuzatildi
              </div>
            </div>
          </div>

          <EcoHeroArt />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-[#e6ede1] bg-white p-4 shadow-card"
              >
                <div className={`mb-5 h-16 rounded-[1.15rem] ${card.accent} p-3`}>
                  <div className="flex h-full items-center justify-between rounded-[0.9rem] border border-white/35 px-3 text-white/95">
                    <Icon className="h-5 w-5" />
                    <div className="h-7 w-7 rounded-full border border-white/45 bg-white/20" />
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-[#20392c]">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#617668]">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#e7eee3] bg-white/70">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-5 px-4 py-5 text-sm text-[#426050] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-medium">
            <Link to="/how-it-works" className="transition-colors hover:text-forest-700">
              Qanday ishlaydi?
            </Link>
            <Link to="/rewards-marketplace" className="transition-colors hover:text-forest-700">
              Ball to'plash
            </Link>
            <Link to="/community-impact" className="transition-colors hover:text-forest-700">
              Mukofotlar
            </Link>
            <Link to="/pricing" className="transition-colors hover:text-forest-700">
              Reyting haqida
            </Link>
            <Link to="/faq" className="transition-colors hover:text-forest-700">
              Biz haqimizda
            </Link>
          </div>
          <p className="text-sm text-[#62776a]">
            Chiqindi orqali pul ishlang!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {stepCards.map((step) => (
            <div
              key={step.title}
              className="min-h-[170px] rounded-[1.75rem] border border-[#e6ede1] bg-white p-7 shadow-card"
            >
              <h2 className="text-lg font-semibold text-[#1f382c]">{step.title}</h2>
              <p className="mt-3 max-w-[28ch] text-sm leading-7 text-[#63776a]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
