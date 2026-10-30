
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/form/contact-form";
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
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0B2D5B]">
                            {t("infoTitle")}
                        </h2>

                        <p className="mt-4 leading-8 text-slate-600">
                            {t("infoDescription")}
                        </p>

                        <div className="mt-10 space-y-7">

                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#00A995]">
                                    <Mail />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#0B2D5B]">
                                        {t("emailTitle")}
                                    </h3>

                                    <a
                                        href="mailto:codeview1976@gmail.com"
                                        className="mt-1 block text-slate-600 transition hover:text-[#00A995]"
                                    >
                                        codeview1976@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#00A995]">
                                    <Phone />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#0B2D5B]">
                                        {t("phoneTitle")}
                                    </h3>

                                    <a
                                        href="tel:+201551260673"
                                        className="mt-1 inline-block text-slate-600 transition hover:text-[#00A995]"
                                    >
                                        <span dir="ltr">01551260673</span>
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F5] text-[#00A995]">
                                    <MapPin />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#0B2D5B]">
                                        {t("locationTitle")}
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        {t("locationDescription")}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                        <h2 className="mb-8 text-2xl font-bold text-[#0B2D5B]">
                            {t("formTitle")}
                        </h2>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
