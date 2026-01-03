export default function donutchart({
  percentage = 62.9,
  size = 260,
  strokeWidth = 18,
  completedECTS = 151,
  requiredECTS = 240,
}: {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  completedECTS?: number;
  requiredECTS?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percentage / 100) * circumference;

  return (
    <div className="relative inline-grid place-items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1f2937"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fb7185"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <div className="absolute text-center">
        <div className="text-xl font-semibold">{percentage}%</div>
        <div className="text-sm text-gray-400">
          {completedECTS} / {requiredECTS}
        </div>
        <div className="text-xs text-gray-500">Credits</div>
      </div>
    </div>
  );
}
