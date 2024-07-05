"use client";
import React, { useState } from "react";
import SocialsList from "@/shared/SocialsList/SocialsList";
import Label from "@/components/Label/Label";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
useRouter;
const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Hay saada 1 ,Driouch",
  },
  {
    title: "💌 EMAIL",
    desc: "contact@Zeemarke.ma",
  },
  {
    title: "☎ PHONE",
    desc: "+212-673-712847",
  },
];

const PageContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        "service_ukha5rj", // Replace with your service ID
        "template_48q0skr", // Replace with your  template ID
        e.target,
        "D6rvZ-4VTYBkI0nkJ" // Replace with your user ID
      );
      toast.success("Email Sent Successfully");
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden nc-PageContact mb-7">
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container mx-auto max-w-7xl">
          <div className="grid flex-shrink-0 grid-cols-1 gap-12 md:grid-cols-2 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-neutral-200">
                  🌏 RÉSEAUX SOCIAUX
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" onSubmit={sendEmail}>
                <label className="block">
                  <Label>Nom complet</Label>
                  <Input
                    placeholder="Exemple brahim"
                    type="text"
                    name="name"
                    className="mt-1"
                    required
                  />
                </label>
                <label className="block">
                  <Label>Adresse e-mail</Label>
                  <Input
                    type="email"
                    placeholder="exemple@exemple.com"
                    name="email"
                    className="mt-1"
                    required
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>
                  <Textarea className="mt-1" rows={6} name="message" required />
                </label>
                <div>
                  <ButtonPrimary type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
