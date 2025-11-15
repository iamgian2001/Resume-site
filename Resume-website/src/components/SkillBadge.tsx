import { type ReactNode } from "react";

interface SkillBadgeProps {
  label: string;
  icon?: ReactNode;
}

export default function SkillBadge({ label, icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center border border-accent px-3 py-2 rounded-2xl space-x-2 text-textDark font-light">
      <span className="font-body">{label}</span>
      {icon}
    </div>
  );
}
