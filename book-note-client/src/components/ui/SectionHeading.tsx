interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 space-y-3 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-base-content md:text-4xl">
        {title}
      </h2>

      {subtitle && <p className="max-w-2xl text-base-content/70">{subtitle}</p>}
    </div>
  );
}

