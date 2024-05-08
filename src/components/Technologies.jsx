import { motion } from "framer-motion";
import { AiOutlineDotNet } from "react-icons/ai";
import { BsFiletypeSql } from "react-icons/bs";
import { SiSpringboot, SiQuarkus, SiMongodb } from "react-icons/si";
import { FaAngular, FaReact } from "react-icons/fa";

export const Technologies = ({language}) => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {language === 'es' ? 'Tecnologías' : 'Technologies'}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Icons */}
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSpringboot className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">Java Springboot</p>
        </div>
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiQuarkus className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">Quarkus</p>
        </div>
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsFiletypeSql className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">SQL - PL/ SQL</p>
        </div>
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">Mongo DB</p>
        </div>
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiOutlineDotNet className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">.Net</p>
        </div>
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">Angular</p>
        </div>
        <div className="text-center">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-slate-500" />
          </div>
          <p className="mt-2 text-neutral-400">React</p>
        </div>
        {/* Icons */}
      </motion.div>
    </div>
  );
};
