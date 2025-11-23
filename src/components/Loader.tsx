"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-2xl flex items-center justify-center z-50 min-h-screen w-full">
      <div className="relative flex flex-col items-center">
        <div className="relative w-12 h-12 mb-4">
          <div className="w-12 h-12 rounded-full border-t-4 border-gray-800 border-r-4 animate-spin"></div>
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-b-4 border-teal-400 border-l-4 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
