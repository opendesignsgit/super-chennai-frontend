import React from "react";
import { X } from "lucide-react";
import EventsFilterSidebar from "./EventsFilterSidebar";

const SidebarModal = ({ open, onClose, filters, setFilters }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-4/5 sm:w-[300px] h-full shadow-lg p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <EventsFilterSidebar filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default SidebarModal;
