import { motion } from "framer-motion";
import React from "react";
type Props = {
  btnName: string;
  btnFunction: () => any;
  style?: string;
};
const PushButton = ({
  btnName,
  btnFunction,
  style = "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-500 text-white font-semibold rounded-md shadow-md px-12 py-4 m-2",
}: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={style}
      onClick={btnFunction}
    >
      {btnName}
    </motion.button>
  );
};

export default PushButton;
