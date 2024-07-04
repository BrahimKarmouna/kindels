"use client"
import React, { useState } from "react";
import SocialsList from "@/shared/SocialsList/SocialsList";
import Label from "@/components/Label/Label";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

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
        "service_ukha5rj",  // Replace with your service ID
        "template_48q0skr", // Replace with your template ID
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
    <div className="nc-PageContact overflow-hidden mb-7">
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" onSubmit={sendEmail}>
                <label className="block">
                  <Label>Full name</Label>
                  <Input
                    placeholder="Example brahim"
                    type="text"
                    name="name"
                    className="mt-1"
                    required
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>
                  <Input
                    type="email"
                    placeholder="example@example.com"
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
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      {/* <div className="container">
        <div className="relative my-24 lg:my-32 py-24 lg:py-32">
          <BackgroundSection />
          <SectionPromo1 />
        </div>
      </div> */}
    </div>
  );
};

export default PageContact;
