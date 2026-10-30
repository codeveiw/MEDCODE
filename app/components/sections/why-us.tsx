
import {
  ShieldCheck,
  Users,
  Lightbulb,
  HeartPulse,
} from "lucide-react";

const features = [
  { key: "security", icon: ShieldCheck },
  { key: "experience", icon: Users },
  { key: "innovation", icon: Lightbulb },
  { key: "healthcare", icon: HeartPulse },
];

export default async function WhyUs() {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("WhyUs");

  return (
    <section className="bg-[#F5F8FC] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-[#00A995]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-[#0B2D5B] md:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-500">
            {t("description")}
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {features.map(({ key, icon: Icon }) => (
              <div key={key} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00A995] shadow-sm">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#0B2D5B]">
                    {t(`${key}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[#00A995]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl bg-[#0B2D5B] p-8 text-white md:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] border-white/5" />

            <div className="relative">
              <HeartPulse size={48} className="text-[#00C2A8]" />

              <h3 className="mt-10 text-3xl font-bold leading-snug">
                {t("statement")}
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                {t("statementDescription")}
              </p>

              <div className="mt-10 h-1.5 w-20 rounded-full bg-[#00C2A8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
