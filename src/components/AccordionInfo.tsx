"use client";

import { Disclosure } from "@/app/headlessui";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface Props {
  panelClassName?: string;
  content: string;
}

const AccordionInfo: FC<Props> = ({
  panelClassName = "p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6",
  content,
}) => {
  const data = [
    {
      name: "Description",
      content: content,
    },

    {
      name: "FAQ",
      content: `
        <ul class="list-disc list-inside leading-7">
          <li>Nous offrons une garantie de satisfaction de 15 jours sur tous les packs de bougies. Si vous n'êtes pas entièrement satisfait de votre achat, vous pouvez le retourner dans les 15 jours pour un remboursement complet ou un échange.</li>
          <li>Dans le cas rare où votre pack de bougies arrive endommagé ou défectueux, veuillez nous contacter dans les 7 jours suivant la réception. Nous organiserons un remplacement ou un remboursement dès que possible.</li>
          <li>Les remboursements seront traités dans un délai de 5 à 7 jours ouvrables après réception et inspection des articles retournés. Les remboursements seront effectués sur le mode de paiement original utilisé pour l'achat.</li>
          <li>Les clients sont responsables des frais d'expédition de retour sauf si le retour est dû à notre erreur (par exemple, mauvais article expédié, article endommagé).</li>
        </ul>
      `,
    },
  ];
  return (
    <div className="w-full rounded-2xl space-y-2.5">
      {/* ============ */}
      {data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left rounded-lg bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default AccordionInfo;
