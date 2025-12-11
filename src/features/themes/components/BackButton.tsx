"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="p-2 hover:bg-slate-100 rounded-full"
    >
      <ArrowRight className="w-6 h-6 text-slate-600 rotate-180" />
    </button>
  );
}
