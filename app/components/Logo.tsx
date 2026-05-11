import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-12 h-12">
      <Image
        src="/icons/logo.svg?v=5"
        alt="O'Brien painting logo"
        width={48}
        height={48}
        className="w-full h-full object-contain"
        unoptimized
        priority
      />
    </div>
  );
}
