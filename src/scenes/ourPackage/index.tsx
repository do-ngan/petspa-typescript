import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Package";

const classes: Array<ClassType> = [
  {
    name: "Luxurious Bathing Sessions",
    description:
      "Treat your pets to a spa day with our premium bathing services, featuring specially formulated shampoos and conditioners for a soft, shiny coat.",
    image: image1,
  },
  {
    name: "Stylish Haircuts",
    image: image2,
  },
  {
    name: "Colorful Fur Dyeing",
    description:
      "Add a touch of fun with our pet-safe fur dyeing options. Choose from a rainbow of colors to give your furry friend a unique and vibrant look.",
    image: image3,
  },
  {
    name: "Relaxing Spa Treatments",
    description:
      "Indulge your pet in our spa treatments, including soothing massages and aromatherapy sessions, promoting relaxation and overall well-being.",
    image: image4,
  },
  {
    name: "Expert Care",
    image: image5,
  },
  {
    name: "Comfortable Environment",
    description:
      "Our spa is designed to create a calm and welcoming atmosphere, ensuring your pets feel at ease and enjoy their spa day to the fullest.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurPackages = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourpackages" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurPackages)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR PACKAGES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurPackages;
