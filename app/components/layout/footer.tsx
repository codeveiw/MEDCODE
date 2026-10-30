
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { HeartPulse, Mail, ArrowUpRight } from "lucide-react";

export default async function Footer() {
    const locale = await getLocale();
    const t = await getTranslations("Footer");

    return (
        <footer className="bg-[#071F40] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <Link href={`/${locale}`} className="inline-flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A995]">
                                <HeartPulse size={25} />
                            </span>

                            <span className="text-2xl font-bold">
                                Med<span className="text-[#00C2A8]">Code</span>
                            </span>
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-8 text-blue-100/70">
                            {t("description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold">{t("quickLinks")}</h3>

                        <div className="mt-6 flex flex-col gap-4 text-sm text-blue-100/70">
                            <Link href={`/${locale}`} className="hover:text-[#00C2A8]">
                                {t("home")}
                            </Link>

                            <Link href={`/${locale}/about`} className="hover:text-[#00C2A8]">
                                {t("about")}
                            </Link>

                            <Link href={`/${locale}/services`} className="hover:text-[#00C2A8]">
                                {t("services")}
                            </Link>

                            <Link href={`/${locale}/solutions`} className="hover:text-[#00C2A8]">
                                {t("solutions")}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold">{t("contactTitle")}</h3>

                        <Link
                            href={`/${locale}/contact`}
                            className="mt-6 inline-flex items-center gap-2 text-sm text-blue-100/70 transition hover:text-[#00C2A8]"
                        >
                            <Mail size={18} />
                            {t("contact")}
                            <ArrowUpRight size={15} />
                        </Link>
                    </div>
                </div>

                <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-blue-100/50 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} MedCode. {t("rights")}
                    </p>

                    <p>{t("tagline")}</p>
                </div>
            </div>
        </footer>
    );
}
