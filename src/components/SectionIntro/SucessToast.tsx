"use client";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FcApproval } from "react-icons/fc";

interface Props {
  isSuccess: boolean;
}
function SucessToast({ isSuccess }: Props) {
  const notify = () => {
    return toast.custom(
      (t) => (
        <Transition
          appear
          show
          className="w-full max-w-md p-4 bg-white shadow-lg pointer-events-auto dark:bg-slate-800 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 text-slate-900 dark:text-slate-200"
          enter="transition-all duration-150"
          enterFrom="opacity-0 translate-x-20"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-20"
        >
          <div className="flex flex-col items-center justify-center p-6 border border-green-200 rounded-lg shadow-md ">
            <h3 className="mb-4 text-xl font-semibold text-green-700">
              Commande validée avec succès!
            </h3>
            <div className="">
              <FcApproval size={90} />
            </div>
            <p className="text-lg text-green-800">
              Merci pour votre commande! Veuillez patienter pour recevoir un
              email ou un appel de notre part.
            </p>
          </div>
        </Transition>
      ),
      {
        position: "bottom-center",
        id: "nc-product-notify",
        duration: 6000,
      }
    );
  };
  useEffect(() => {
    if (isSuccess) {
      notify();
    }
  }, []);
  return (
    <div className="overflow-visible">
      <Toaster />
    </div>
  );
}

export default SucessToast;
