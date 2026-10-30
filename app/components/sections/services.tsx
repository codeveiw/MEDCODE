
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import {
    Globe,
    CalendarCheck,
    LayoutDashboard,
    Code2,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        key: "digital",
        icon: Globe,
        number: "01",
    },
    {
        key: "management",
        icon: CalendarCheck,
        number: "02",
    },
    {
        key: "applications",
        icon: LayoutDashboard,
        number: "03",
    },
    {
        key: "custom",
        icon: Code2,
        number: "04",
    },
];

export default async function Services() {
    const locale = await getLocale();
    const t = await getTranslations("Services");

    return (
        <section id="services" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#00A995]">
                        {t("eyebrow")}
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold text-[#0B2D5B] md:text-4xl">
                        {t("title")}
                    </h2>

                    <p className="mt-5 leading-8 text-slate-500">
                        {t("description")}
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map(({ key, icon: Icon, number }) => (
                        <article
                            key={key}
                            className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#00A995]/40 hover:shadow-xl hover:shadow-[#0B2D5B]/5"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#00A995] transition group-hover:bg-[#0B2D5B] group-hover:text-white">
                                    <Icon size={27} />
                                </div>

                                <span className="text-sm font-bold text-slate-300">
                                    {number}
                                </span>
                            </div>

                            <h3 className="mt-8 text-xl font-bold text-[#0B2D5B]">
                                {t(`${key}.title`)}
                            </h3>

                            <p className="mt-4 min-h-24 text-sm leading-7 text-slate-500">
                                {t(`${key}.description`)}
                            </p>

                            <Link
                                href={`/${locale}/services`}
                                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00A995]"
                            >
                                {t("learnMore")}
                                <ArrowUpRight size={16} />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
