
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  Target,
  Eye,
  Heart,
  ArrowUpRight,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const values = [
  { key: "trust", icon: ShieldCheck },
  { key: "innovation", icon: Lightbulb },
  { key: "simplicity", icon: Heart },
  { key: "quality", icon: Users },
];

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B2D5B] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="font-semibold text-[#00C2A8]">
            {t("eyebrow")}
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl bg-[#F5F8FC] p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2D5B] text-white">
              <Target size={28} />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-[#0B2D5B]">
              {t("missionTitle")}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {t("missionDescription")}
            </p>
          </article>

          <article className="rounded-3xl bg-[#E8F8F5] p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A995] text-white">
              <Eye size={28} />
            </div>

            <h2 className="mt-7 text-2xl font-bold text-[#0B2D5B]">
              {t("visionTitle")}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {t("visionDescription")}
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F8FC] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="font-bold uppercase tracking-widest text-[#00A995]">
              {t("valuesEyebrow")}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0B2D5B] md:text-4xl">
              {t("valuesTitle")}
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              {t("valuesDescription")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }) => (
              <article
                key={key}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <Icon size={30} className="text-[#00A995]" />

                <h3 className="mt-6 text-xl font-bold text-[#0B2D5B]">
                  {t(`${key}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {t(`${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#0B2D5B]">
            {t("ctaTitle")}
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            {t("ctaDescription")}
          </p>

          <Link
            href="../contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B2D5B] px-7 py-4 font-bold text-white hover:bg-[#00A995]"
          >
            {t("ctaButton")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
