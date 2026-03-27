import { AlertCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-[#e6ede1] bg-white px-6 py-12 text-center shadow-card sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eef6ec] text-forest-700">
            <AlertCircle className="h-7 w-7" />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#183427] sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#5f7467]">
            The route <span className="font-semibold text-[#2b4638]">{location.pathname}</span> does not exist yet.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-eco transition-transform hover:-translate-y-0.5"
          >
            Return to homepage
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
