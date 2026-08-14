import {
  Boxes,
  Camera,
  Check,
  FileText,
  Handshake,
  Heart,
  Home,
  KeyRound,
  MapPin,
  Shield,
  Star,
  Tag,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/site";

const serviceIcons = {
  home: Home,
  key: KeyRound,
  boxes: Boxes,
  users: Users,
  barn: Warehouse,
  tag: Tag,
};

export function ServiceGlyph({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} />;
}

export function CircleIcon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-green text-white ${className}`}
    >
      {children}
    </span>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6 text-ink">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export {
  Camera,
  FileText,
  Handshake,
  Heart,
  Home,
  MapPin,
  Shield,
  Star,
  Truck,
};
