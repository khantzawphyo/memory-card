// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';

export default function Tooltip({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute bottom-24 left-12 z-50 max-w-64"
        >
          <div className="relative rounded-2xl border-4 border-yellow-950 bg-white p-3 shadow-xl">
            <p className="text-xs leading-tight font-black text-yellow-950 uppercase">
              Enable <span className="text-red-600">Music & Sounds</span> here for the full
              experience! You can also switch between themes for fun!
            </p>

            <div className="absolute -bottom-3 left-5 h-5 w-5 rotate-45 border-r-4 border-b-4 border-yellow-950 bg-white" />

            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-yellow-950 bg-red-500 text-xs font-bold text-white transition-colors hover:bg-red-600"
              aria-label="Close tutorial"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}