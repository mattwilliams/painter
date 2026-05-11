export default function HeaderBrush() {
  return (
    <div className="relative w-full h-0">
      <img
        src="/about/headerPaintbrush.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-0 w-full h-auto rotate-90 scale-[1.75] -translate-x-6 -translate-y-[80px] origin-center"
      />
    </div>
  );
}