
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
    Globe,
    CalendarCheck,
    LayoutDashboard,
    Code2,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("ServicesPage");

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
    };
}

const serviceList = [
    { key: "digital", icon: Globe, number: "01" },
    { key: "management", icon: CalendarCheck, number: "02" },
    { key: "applications", icon: LayoutDashboard, number: "03" },
    { key: "custom", icon: Code2, number: "04" },
];

export default async function ServicesPage() {
    const t = await getTranslations("ServicesPage");

    return (
        <main>
            {/* Page Hero */}
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

            {/* Services */}
            <section className="bg-white px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2">
                        {serviceList.map(({ key, icon: Icon, number }) => (
                            <article
                                key={key}
                                className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-[#00A995]/40 hover:shadow-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F8F5] text-[#00A995]">
                                        <Icon size={30} />
                                    </div>

                                    <span className="text-lg font-bold text-slate-300">
                                        {number}
                                    </span>
                                </div>

                                <h2 className="mt-8 text-2xl font-bold text-[#0B2D5B]">
                                    {t(`${key}.title`)}
                                </h2>

                                <p className="mt-4 leading-8 text-slate-500">
                                    {t(`${key}.description`)}
                                </p>

                                <div className="mt-7 space-y-3">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={19}
                                                className="mt-1 shrink-0 text-[#00A995]"
                                            />
                                            <span className="text-sm leading-6 text-slate-600">
                                                {t(`${key}.feature${item}`)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#F5F8FC] px-6 py-20 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#0B2D5B] p-8 md:flex-row md:items-center md:p-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            {t("ctaTitle")}
                        </h2>
                        <p className="mt-4 leading-7 text-blue-100">
                            {t("ctaDescription")}
                        </p>
                    </div>

                    <Link
                        href="../contact"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#00C2A8] px-6 py-4 font-bold text-[#0B2D5B] transition hover:bg-white"
                    >
                        {t("ctaButton")}
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
