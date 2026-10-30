
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "nameError"),
  email: z.string().trim().email("emailError"),
  phone: z.string().trim().min(7, "phoneError"),
  service: z.string().min(1, "serviceError"),
  message: z.string().trim().min(10, "messageError"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations("ContactPage.form");

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#00A995] focus:ring-2 focus:ring-[#00A995]/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status === "success" && (
        <div
          role="status"
          className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-700"
        >
          <CheckCircle2 size={22} />
          <p>{t("successMessage")}</p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-700"
        >
          <AlertCircle size={22} />
          <p>{t("errorMessage")}</p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            {t("name")}
          </label>
          <input
            {...register("name")}
            placeholder={t("namePlaceholder")}
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {t(errors.name.message as "nameError")}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            {t("email")}
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder={t("emailPlaceholder")}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {t(errors.email.message as "emailError")}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            {t("phone")}
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder={t("phonePlaceholder")}
            className={inputClass}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {t(errors.phone.message as "phoneError")}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            {t("service")}
          </label>
          <select {...register("service")} className={inputClass}>
            <option value="">{t("servicePlaceholder")}</option>
            <option value="website">{t("websiteOption")}</option>
            <option value="appointments">{t("appointmentsOption")}</option>
            <option value="management">{t("managementOption")}</option>
            <option value="custom">{t("customOption")}</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">
              {t(errors.service.message as "serviceError")}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium text-slate-700">
          {t("message")}
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={inputClass}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {t(errors.message.message as "messageError")}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0B2D5B] px-8 py-4 font-semibold text-white transition hover:bg-[#00A995] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? t("sending") : t("submit")}
        <Send size={18} />
      </button>
    </form>
  );
}
