
import { useState } from "react";

function BottomAdBox() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Ad"
            className="w-20 h-14 object-cover rounded"
          />
          <div>
            <p className="font-semibold text-sm">
              Improve Your Skills Today
            </p>
            <p className="text-xs text-gray-500">
              Join our online course now
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded">
            Get Started
          </button>

          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-black"
          >
          </button>
        </div>

      </div>
    </div>
  );
}

export default BottomAdBox;
