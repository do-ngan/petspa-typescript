import {
    GiftIcon,
    BuildingStorefrontIcon,
    FaceSmileIcon,
  } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Petnefit from "./Petnefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
      icon: <GiftIcon className="h-6 w-6" />,
      title: "Relaxing Spa Treatments",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <BuildingStorefrontIcon className="h-6 w-6" />,
      title: "Comfortable Environment",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <FaceSmileIcon className="h-6 w-6" />,
      title: "Paw-dicure Perfection",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

const container ={
    hidden:{},
    visible: {
        transition: { staggerChildren: 0.2 },
    }
}
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Petnefits = ({setSelectedPage}: Props) => {
  return (
    <section 
        id="petnefits"
        className="mx-auto mt-20 min-h-full w-5/6 py-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Petnefits)}>
            {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
          }}
          >
            <HText>WHY CHOOSE PAWS & RELAX SPA?</HText>
            <p className="my-5 text-sm">
            Indulge your furry friends in the ultimate pampering experience at Paws & Relax Spa! 
            Our state-of-the-art pet spa is designed to cater to the unique needs of your beloved pets, 
            ensuring they leave feeling refreshed, revitalized, and looking their absolute best.
            </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {benefits.map((benefit: BenefitType) => (
                <Petnefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <HText>
                      TOP-NOTCH CARE AND ENJOYABLE SPA{" "}
                        <span className="text-primary-500">EXPERIENCE</span>
                      </HText>
                    </motion.div>
                  </div>
                </div>

                {/* DESCRIPT */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="my-5">
                    Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                    egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                    fames vitae vitae quis. Quis amet vulputate tincidunt at in
                    nulla nec. Consequat sed facilisis dui sit egestas ultrices
                    tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                    Felis orci diam odio.
                  </p>
                  <p className="mb-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                  </p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-5 before:z-[-1] before:content-cats">
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                  </div>
                </div>
              </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Petnefits