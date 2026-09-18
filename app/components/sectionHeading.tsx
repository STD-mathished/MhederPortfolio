import { RevealItem } from "./motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <RevealItem as="span" className="eyebrow">
        {eyebrow}
      </RevealItem>
      <RevealItem as="h2" className="mt-3 text-3xl sm:text-4xl">
        {title}
      </RevealItem>
      {subtitle && (
        <RevealItem
          as="p"
          className={`mt-4 max-w-2xl text-pretty text-base text-muted-foreground ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </RevealItem>
      )}
    </div>
  );
}
