import { Apple, Facebook, Instagram, Leaf, PlayIcon, Twitter } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Qanday ishlaydi?", to: "/how-it-works" },
  { label: "Mukofotlar", to: "/rewards-marketplace" },
  { label: "Dastur haqida", to: "/community-impact" },
  { label: "Haqimizda", to: "/pricing" },
  { label: "Bog'lanish", to: "/faq" },
];

const footerGroups = [
  {
    title: "EcoPoints",
    links: [
      { label: "Qanday ishlaydi?", to: "/how-it-works" },
      { label: "Mukofotlar", to: "/rewards-marketplace" },
      { label: "Dastur", to: "/community-impact" },
    ],
  },
  {
    title: "Kompaniya",
    links: [
      { label: "Haqimizda", to: "/about" },
      { label: "Hamkorlar", to: "/partners" },
      { label: "Takliflar", to: "/careers" },
    ],
  },
];

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  `transition-colors ${
    isActive ? "text-forest-700" : "text-[#284536] hover:text-forest-700"
  }`;

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-[#e9efe5] bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2 text-[1.35rem] font-extrabold tracking-tight text-forest-700">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-100 text-forest-600">
                <Leaf className="h-4 w-4" />
              </span>
              <span>EcoPoints</span>
            </Link>

            <div className="flex items-center gap-2 sm:hidden">
              <Link
                to="/sign-in"
                className="rounded-full border border-[#dde6d7] px-4 py-2 text-sm font-medium text-[#2c4436] transition-colors hover:border-forest-300 hover:text-forest-700"
              >
                Sign In
              </Link>
              <Link
                to="/get-started"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-eco transition-transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#284536]">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              to="/sign-in"
              className="rounded-full border border-[#dde6d7] px-5 py-2.5 text-sm font-medium text-[#2c4436] transition-colors hover:border-forest-300 hover:text-forest-700"
            >
              Kirish
            </Link>
            <Link
              to="/get-started"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-eco transition-transform hover:-translate-y-0.5"
            >
              Boshlash
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="mt-16 border-t border-[#e5ede1] bg-[#f2f7f1]">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-4 py-12 sm:px-6 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.9fr] lg:px-8">
          <div className="max-w-sm space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-forest-700">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-forest-600 shadow-sm">
                <Leaf className="h-4 w-4" />
              </span>
              <span>EcoPoints</span>
            </Link>
            <p className="text-sm leading-7 text-[#466152]">
              Jamiyatga foyda keltirib, chiqindi orqali pul ishlang.
            </p>
            <p className="text-xs text-[#7b8f82]">© 2026 EcoPoints. All rights reserved.</p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-sm font-semibold text-[#24392d]">{group.title}</h2>
              <div className="space-y-3 text-sm text-[#4e6658]">
                {group.links.map((link) => (
                  <div key={link.to}>
                    <Link to={link.to} className="transition-colors hover:text-forest-700">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-[#24392d]">Bog'lanish</h2>
            <div className="space-y-4 text-sm text-[#4e6658]">
              <p>Aloqalar</p>
              <div className="flex items-center gap-4 text-[#3b5446]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                  <Apple className="h-4 w-4" />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                  <PlayIcon className="h-4 w-4" />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                  <Instagram className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
