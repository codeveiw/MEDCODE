
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import {
    CalendarCheck,
    MonitorSmartphone,
    LayoutDashboard,
    Stethoscope,
    ArrowUpRight,
    ShieldCheck,
} from "lucide-react";

const solutions = [
    {
        key: "websites",
        icon: MonitorSmartphone,
    },
    {
        key: "appointments",
        icon: CalendarCheck,
    },
    {
        key: "management",
        icon: LayoutDashboard,
    },
    {
        key: "healthcare",
        icon: Stethoscope,
    },
];

export default async function SolutionsPage() {
    const locale = await getLocale();
    const t = await getTranslations("SolutionsPage");

    return (
        <main>
            {/* Hero */}
            <section className="bg-[#F5F7FA] px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <span className="font-semibold text-[#00A995]">
                        {t("eyebrow")}
                    </span>

                    <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0B2D5B] md:text-6xl">
                        {t("title")}
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {t("description")}
                    </p>
                </div>
            </section>

            {/* Solutions */}
            <section className="px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 max-w-2xl">
                        <span className="font-semibold text-[#00A995]">
                            {t("sectionEyebrow")}
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-[#0B2D5B] md:text-4xl">
                            {t("sectionTitle")}
                        </h2>

                        <p className="mt-4 leading-8 text-slate-600">
                            {t("sectionDescription")}
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {solutions.map(({ key, icon: Icon }, index) => (
                            <article
                                key={key}
                                className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#00A995] hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#00A995]">
                                    <Icon size={27} />
                                </div>

                                <span className="mt-8 block text-sm font-semibold text-[#00A995]">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-2 text-2xl font-bold text-[#0B2D5B]">
                                    {t(`items.${key}.title`)}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {t(`items.${key}.description`)}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="bg-[#0B2D5B] px-6 py-20 text-white">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <ShieldCheck className="mb-5 text-[#00C2A8]" size={40} />

                        <h2 className="text-3xl font-bold">
                            {t("securityTitle")}
                        </h2>

                        <p className="mt-4 leading-8 text-blue-100">
                            {t("securityDescription")}
                        </p>
                    </div>

                    <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#00C2A8] px-7 py-4 font-semibold text-[#0B2D5B] transition hover:bg-white"
                    >
                        {t("contactButton")}
                        <ArrowUpRight size={19} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
