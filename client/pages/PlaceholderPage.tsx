import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-[#e5ede1] bg-white px-6 py-10 shadow-card sm:px-10 sm:py-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-2 text-sm font-semibold text-forest-700">
            <Sparkles className="h-4 w-4" />
            Ready for the next prompt
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-[#173326] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f7467]">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-eco transition-transform hover:-translate-y-0.5"
            >
              Asosiy oynaga qaytish
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dce6d7] px-5 py-3 text-sm font-medium text-[#33493c]">
              Davom etish
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
