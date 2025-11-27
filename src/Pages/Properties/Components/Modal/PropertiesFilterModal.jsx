import { AnimatePresence, motion } from "framer-motion";
import FiltersSidebar from "../Filters/FiltersSidebar";

const PropertiesFilterModal = ({
  open,
  onClose,
  filters,
  onCheckboxChange,
  onBudgetChange,
  onClearAll,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-[9999] flex justify-end"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            // className="bg-white w-4/5 sm:w-[320px] h-full shadow-xl p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <FiltersSidebar
              filters={filters}
              onCheckboxChange={onCheckboxChange}
              onBudgetChange={onBudgetChange}
              onClearAll={onClearAll}
              onClose={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PropertiesFilterModal;
