import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ojas_hero.jpeg";
// import { Ojas_Awachat_Resume } from "./public";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-star">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ojas Awachat
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href="/Ojas_Awachat_Resume.pdf"
              download
              className="inline-block max-w-40 rounded-2xl bg-purple-400 px-6 py-2 mt-5 text-center text-2xl font-medium tracking-tighter text-slate-900 transition hover:bg-purple-500 hover:shadow-lg"
            >
              Resume
            </motion.a>

            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 text-lg leading-relaxed tracking-normal font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="ProfilePic"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
