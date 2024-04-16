import { Feature } from "@/types/feature";
import { motion } from 'framer-motion';

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title } = feature;

  return (
    <motion.div className="w-full shadow-2xl rounded-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="wow fadeInUp mx-auto " data-wow-delay=".15s">
        <div className="flex flex-col items-center justify-center">
          <motion.div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary dark:bg-white bg-opacity-10 text-[#4a044e] dark:text-white shadow-2xl" whileHover={{ scale: 1.1 }}>
            {icon}
          </motion.div>
          <motion.h3 className="mb-5 text-xl font-Cursive shadow-2xl  rounded-full  dark:bg-transparent rounded-corner text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl" whileHover={{ scale: 1.05 }}>
            {title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
