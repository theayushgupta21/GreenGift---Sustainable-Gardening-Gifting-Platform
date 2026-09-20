"use client";

import { FaGoogle } from "react-icons/fa6";

type GoogleAuthButtonProps = {
  onClick: () => void;
};

export default function GoogleAuthButton({ onClick }: GoogleAuthButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-3 bg-white border border-emerald-100 hover:border-emerald-300 text-emerald-800 font-semibold rounded-2xl transition-all duration-300 text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-3 cursor-pointer"
    >
      <FaGoogle className="w-4 h-4 text-emerald-600" />
      Continue with Google
    </button>
  );
}