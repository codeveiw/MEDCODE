
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigationItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "solutions", href: "/solutions" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const isArabic = locale === "ar";
  const switchLocale = isArabic ? "en" : "ar";

  // إزالة اللغة من بداية المسار حتى نحتفظ بنفس الصفحة عند تغيير اللغة.
  const currentPage = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");

  const languageHref = `/${switchLocale}${currentPage}`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-[#0B2D5B]"
        >
          Med<span className="text-[#00A995]">Code</span>
          <span className="ml-1 text-[#00A995]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => {
            const href = `/${locale}${item.href}`;
            const isActive =
              item.href === ""
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={item.key}
                href={href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-[#00A995]"
                    : "text-slate-600 hover:text-[#00A995]"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={languageHref}
            className="text-sm font-semibold text-[#0B2D5B] hover:text-[#00A995]"
          >
            {isArabic ? "EN" : "عربي"}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B2D5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00A995]"
          >
            {t("getStarted")}
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={languageHref}
            onClick={closeMenu}
            className="text-sm font-semibold text-[#0B2D5B]"
          >
            {isArabic ? "EN" : "عربي"}
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0B2D5B] hover:bg-slate-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationItems.map((item) => {
              const href = `/${locale}${item.href}`;
              const isActive =
                item.href === ""
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#E8F8F5] text-[#00A995]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}

            <Link
              href={`/${locale}/contact`}
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#0B2D5B] px-5 py-3.5 font-semibold text-white transition hover:bg-[#00A995]"
            >
              {t("getStarted")}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
