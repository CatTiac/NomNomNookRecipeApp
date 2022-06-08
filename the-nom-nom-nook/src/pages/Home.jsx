import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Pescetarian from "../components/Pesca";
// import Vegan from "../components/Vegan";
import DairyFree from "../components/DairyFree";
// import GlutenFree from "../components/GlutenFree";
import { motion } from 'framer-motion';

import React from 'react'

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5 }}
    >
      <hr></hr>
        <Popular />
        <Veggie />
        <Pescetarian />
        {/* <Vegan /> */}
        {/* <GlutenFree /> */}
        <DairyFree />
    </motion.div>
  );
}

export default Home