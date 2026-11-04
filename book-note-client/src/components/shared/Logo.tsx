import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
  compact?: boolean;
}

export default function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="BookNook Home"
      className="inline-flex items-center"
    >
      <Image
        src={light ? "/assets/logo/logo-white.svg" : "/assets/logo/logo.svg"}
        alt="BookNook - A Small Online Library"
        width={compact ? 155 : 210}
        height={compact ? 38 : 51}
        priority
      />
    </Link>
  );
}
