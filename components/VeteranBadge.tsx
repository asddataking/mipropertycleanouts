export function VeteranBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-[168px] flex-col items-center rounded-2xl border border-cream/20 bg-navy-deep px-3 py-3 text-center ${className}`}
    >
      <svg viewBox="0 0 64 40" className="h-8 w-12" aria-hidden="true">
        <rect width="64" height="40" fill="#1b3d4d" />
        <rect width="28" height="22" fill="#3C3B6E" />
        <g fill="#ffffff">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((__, col) => (
              <circle
                key={`${row}-${col}`}
                cx={4 + col * 4.2}
                cy={3.5 + row * 4}
                r="0.7"
              />
            )),
          )}
        </g>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x={i < 4 ? 28 : 0}
            y={i * (40 / 7)}
            width={i < 4 ? 36 : 64}
            height={40 / 7}
            fill={i % 2 === 0 ? "#B22234" : "#ffffff"}
          />
        ))}
      </svg>
      <p className="mt-2 text-[10px] font-extrabold tracking-[0.16em] text-white uppercase">
        Veteran Owned
      </p>
      <p className="text-[10px] font-extrabold tracking-[0.16em] text-white uppercase">
        Business
      </p>
    </div>
  );
}
