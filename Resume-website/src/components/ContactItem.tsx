import { type ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  children: string;
  link?: string;
}

export default function ContactItem({
  icon,
  children,
  link,
}: ContactItemProps) {
  const Content = (
    <span className="flex items-center space-x-2">
      {icon}
      <span>{children}</span>
    </span>
  );

  return link ? (
    <a href={link} target="_blank" className="underline">
      {Content}
    </a>
  ) : (
    Content
  );
}
