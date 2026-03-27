import Image from "next/image";
import Link from "next/link";

type LogoMarkProps = {
  priority?: boolean;
};

export function LogoMark({ priority = false }: LogoMarkProps) {
  return (
    <Link href="/" className="logo-mark" aria-label="E.M. Harris home">
      <Image
        src="/images/em-harris-logo.jpg"
        alt="E.M. Harris Construction logo"
        width={100}
        height={50}
        priority={priority}
      />
    </Link>
  );
}
