
import { getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";

export default async function ContactPage() {
    const t = await getTranslations("ContactPage");

    return (
        <main>
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

            <section className="px-6 py-24">
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Email */}
                        <a
                            href="mailto:codeview1976@gmail.com"
                            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:border-[#00A995] hover:shadow-md"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F8F5] text-[#00A995] transition group-hover:bg-[#00A995] group-hover:text-white">
                                <Mail size={28} />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-[#0B2D5B]">
                                {t("emailTitle")}
                            </h3>
                            <p className="text-slate-600">
                                codeview1976@gmail.com
                            </p>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+201551260673"
                            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:border-[#00A995] hover:shadow-md"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F8F5] text-[#00A995] transition group-hover:bg-[#00A995] group-hover:text-white">
                                <Phone size={28} />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-[#0B2D5B]">
                                {t("phoneTitle")}
                            </h3>
                            <p className="text-slate-600">
                                <span dir="ltr">01551260673</span>
                            </p>
                        </a>

                        {/* Location */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F8F5] text-[#00A995]">
                                <MapPin size={28} />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-[#0B2D5B]">
                                {t("locationTitle")}
                            </h3>
                            <p className="text-slate-600">
                                {t("locationDescription")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
