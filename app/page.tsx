import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        KosFunds
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Aplikasi web untuk pencatatan keuangan pribadi dengan mudah dan efisien
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[1].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}