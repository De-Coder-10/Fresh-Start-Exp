import React from "react";
import { motion } from "framer-motion";

export default function SubjectInfoCard({ subject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1e1f24] border border-white/10 rounded-2xl shadow-md p-4 backdrop-blur-md hover:border-white/20 hover:shadow-lg transition-all"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white font-semibold text-base sm:text-lg">
          {subject.name}
        </h2>
        <span className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full font-mono tracking-wide">
          {subject.code}
        </span>
      </div>

      {/* Credits and Audit Label */}
      <div className="flex items-center justify-between text-sm text-white/70 mb-3">
        <p>Credits: <span className="font-medium text-white">{subject.credits}</span></p>
        {subject.isAudit && (
          <span className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-0.5 rounded-md">
            Audit
          </span>
        )}
      </div>

      {/* Components */}
      <div className="space-y-2">
        {subject.components.map((component, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#2a2d31]/60 border border-white/5 text-sm text-white/80"
          >
            <span className="capitalize font-medium">{component.type}</span>
            <span className="text-right">{component.teacher}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
