
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import {
  ArrowUpRight,
  CalendarDays,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-[#F5F8FC]">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#00C2A8]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00A995]/20 bg-white px-4 py-2 text-sm font-semibold text-[#008F80]">
            <Activity size={16} />
            {t("eyebrow")}
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#0B2D5B] md:text-5xl lg:text-6xl">
            {t("title")}
            <span className="mt-2 block text-[#00A995]">
              {t("highlight")}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B2D5B] px-6 py-4 font-semibold text-white transition hover:bg-[#00A995]"
            >
              {t("primaryCta")}
              <ArrowUpRight size={19} />
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-[#0B2D5B] transition hover:border-[#00A995]"
            >
              {t("secondaryCta")}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-slate-200 pt-7">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#00A995]" size={23} />
              <span className="text-sm font-medium text-slate-600">
                {t("benefitOne")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Activity className="text-[#00A995]" size={23} />
              <span className="text-sm font-medium text-slate-600">
                {t("benefitTwo")}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2rem] bg-[#00C2A8]/10 blur-2xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-[#0B2D5B]/10 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {t("dashboardLabel")}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[#0B2D5B]">
                  {t("dashboardTitle")}
                </h3>
              </div>

              <div className="rounded-xl bg-[#E7F8F5] p-3 text-[#00A995]">
                <Activity size={25} />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#F5F8FC] p-5">
                <CalendarDays className="text-[#00A995]" size={23} />
                <p className="mt-5 text-3xl font-bold text-[#0B2D5B]">24</p>
                <p className="mt-1 text-sm text-slate-500">
                  {t("appointments")}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F5F8FC] p-5">
                <Activity className="text-[#00A995]" size={23} />
                <p className="mt-5 text-3xl font-bold text-[#0B2D5B]">12</p>
                <p className="mt-1 text-sm text-slate-500">
                  {t("doctors")}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-[#0B2D5B] p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-100">
                  {t("smartManagement")}
                </span>
                <ShieldCheck className="text-[#00C2A8]" size={22} />
              </div>

              <p className="mt-3 text-2xl font-bold">
                {t("betterExperience")}
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                {t("dashboardDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
