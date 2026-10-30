
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";




import { getTranslations } from "next-intl/server";
import WhatsAppButton from "@/components/layout/whatsapp-button";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: {
      default: t("title"),
      template: `%s | MedCode`,
    },
    description: t("description"),
    applicationName: "MedCode",
    keywords: [
      "Healthcare Technology",
      "Clinic Management",
      "Medical Websites",
      "Appointment Booking",
      "Digital Healthcare Solutions",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "MedCode",
      type: "website",
    },
  };
}


type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
            <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
