
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

export default async function CTA() {
  const locale = await getLocale();
  const t = await getTranslations("CTA");

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0B2D5B] px-8 py-16 text-center md:px-16">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#00C2A8]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#00C2A8]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-5 leading-8 text-blue-100">
            {t("description")}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#00C2A8] px-7 py-4 font-bold text-[#0B2D5B] transition hover:bg-white"
          >
            {t("button")}
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
