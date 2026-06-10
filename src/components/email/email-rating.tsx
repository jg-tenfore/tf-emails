import { Star01 } from "@untitledui/icons";

interface EmailRatingProps {
  question?: string;
  /** Base URL each star links to; the rating is appended as ?rating=N. */
  href?: string;
  lowLabel?: string;
  highLabel?: string;
}

/** "How helpful was this email?" star rating (each star is a tracking link). */
export const EmailRating = ({
  question = "How helpful was this email?",
  href = "#",
  lowLabel = "Not helpful",
  highLabel = "Extremely helpful",
}: EmailRatingProps) => {
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-secondary">{question}</p>
      <div className="mt-3 flex justify-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <a
            key={i}
            href={`${href}?rating=${i + 1}`}
            aria-label={`Rate ${i + 1} out of 5`}
            className="text-quaternary transition-colors hover:text-[#f5b800]"
          >
            <Star01 className="size-7" />
          </a>
        ))}
      </div>
      <div className="mx-auto mt-2 flex max-w-[240px] justify-between text-xs text-quaternary">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
};
