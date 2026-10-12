import { useState } from "react";
import { ChevronDown } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import {
  emailsUsingTerm,
  type TermType,
  type TermWording,
  termsCatalog,
  termsCategories,
} from "@/lib/terms-catalog";
import { cx } from "@/utils/cx";

export type TermsLibraryFilter = "all" | "in-use" | "sourced" | "draft-only";

interface TermsLibraryProps {
  /** Starting filter. */
  filter?: TermsLibraryFilter;
  /** Open every term's wording by default. */
  expanded?: boolean;
}

const hasSourced = (t: TermType) =>
  t.agreement?.status === "sourced" || t.houseRules?.status === "sourced";

const filters: { id: TermsLibraryFilter; label: string; match: (t: TermType) => boolean }[] = [
  { id: "all", label: "All", match: () => true },
  { id: "in-use", label: "In use", match: (t) => emailsUsingTerm(t.id).length > 0 },
  { id: "sourced", label: "Sourced wording", match: hasSourced },
  { id: "draft-only", label: "Draft only", match: (t) => !hasSourced(t) },
];

const styleLabels = { agreement: "Agreement", houseRules: "House rules" } as const;

const WordingBlock = ({
  style,
  wording,
}: {
  style: keyof typeof styleLabels;
  wording: TermWording;
}) => (
  <div className="rounded-lg bg-secondary px-4 py-3">
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-xs font-semibold tracking-wide text-quaternary uppercase">
        {styleLabels[style]}
        {wording.title ? ` · “${wording.title}”` : null}
      </p>
      {wording.status === "draft" ? (
        <Badge type="pill-color" color="warning" size="sm">
          Draft — needs course review
        </Badge>
      ) : null}
    </div>
    <ul className="mt-2 flex flex-col gap-1.5 text-sm text-secondary">
      {wording.items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span aria-hidden="true" className="shrink-0 select-none">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {wording.source ? (
      <p className="mt-2 text-xs text-tertiary">Source: {wording.source}</p>
    ) : null}
  </div>
);

const StyleBadge = ({ label, wording }: { label: string; wording?: TermWording }) => {
  if (!wording) return null;
  return (
    <Badge
      type="pill-color"
      color={wording.status === "sourced" ? "success" : "warning"}
      size="sm"
    >
      {label} · {wording.status === "sourced" ? "Sourced" : "Draft"}
    </Badge>
  );
};

const TermCard = ({ term, expanded }: { term: TermType; expanded: boolean }) => {
  const usedIn = emailsUsingTerm(term.id);
  return (
    <details
      open={expanded}
      className="group rounded-xl border border-secondary bg-primary"
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-md font-semibold text-primary">{term.title}</h3>
            <code className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-xs text-tertiary">
              {term.id}
            </code>
          </div>
          <p className="mt-1 text-sm text-tertiary">{term.purpose}</p>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <StyleBadge label="Agreement" wording={term.agreement} />
            <StyleBadge label="House rules" wording={term.houseRules} />
            {usedIn.length ? (
              <Badge type="pill-color" color="brand" size="sm">
                In use · {usedIn.join(", ")}
              </Badge>
            ) : (
              <Badge type="pill-color" color="gray" size="sm">
                Not in an email yet
              </Badge>
            )}
          </div>
        </div>
        <ChevronDown
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-fg-quaternary transition duration-100 ease-linear group-open:rotate-180"
        />
      </summary>
      <div className="flex flex-col gap-3 border-t border-secondary px-5 py-4">
        {term.agreement ? <WordingBlock style="agreement" wording={term.agreement} /> : null}
        {term.houseRules ? <WordingBlock style="houseRules" wording={term.houseRules} /> : null}
      </div>
    </details>
  );
};

/**
 * Reference page listing every known tee time term type, grouped by category,
 * with its wording, where the wording came from, and which emails use it.
 * Reads the same catalog the `CourseTerms` email block renders from.
 */
export const TermsLibrary = ({ filter: initialFilter = "all", expanded = false }: TermsLibraryProps) => {
  const [filter, setFilter] = useState<TermsLibraryFilter>(initialFilter);
  const match = filters.find((f) => f.id === filter)!.match;

  const total = termsCatalog.length;
  const inUse = termsCatalog.filter((t) => emailsUsingTerm(t.id).length > 0).length;
  const sourced = termsCatalog.filter(hasSourced).length;
  const stats = [
    { label: "Term types", value: total },
    { label: "In an email", value: inUse },
    { label: "Sourced wording", value: sourced },
    { label: "Draft only", value: total - sourced },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-sm font-semibold text-brand-secondary">Email Components</p>
      <h1 className="mt-2 text-display-xs font-semibold text-primary">Terms Library</h1>
      <p className="mt-3 text-md text-tertiary">
        Every kind of term a course might attach to a tee time booking. Emails pick
        terms by id with <code className="font-mono text-sm">{"<CourseTerms include={…} />"}</code>.
        Each term can be written two ways: as a first-person <strong className="font-semibold text-secondary">agreement</strong> or
        as the course’s <strong className="font-semibold text-secondary">house rules</strong>. Sourced
        wording comes from a real course confirmation; drafts need course review and stay
        out of emails unless a story opts in.
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-secondary px-4 py-3">
            <dt className="text-xs text-tertiary">{s.label}</dt>
            <dd className="mt-1 text-display-xs font-semibold text-primary">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div role="group" aria-label="Filter terms" className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cx(
              "rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ring-inset transition duration-100 ease-linear",
              filter === f.id
                ? "bg-brand-solid text-white ring-transparent"
                : "bg-primary text-secondary ring-primary hover:bg-primary_hover",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {termsCategories.map((cat) => {
        const terms = termsCatalog.filter((t) => t.category === cat.id && match(t));
        if (!terms.length) return null;
        return (
          <section key={cat.id} className="mt-10">
            <h2 className="text-lg font-semibold text-primary">{cat.title}</h2>
            <p className="mt-1 text-sm text-tertiary">{cat.description}</p>
            <div className="mt-4 flex flex-col gap-3">
              {terms.map((t) => (
                <TermCard key={`${t.id}-${expanded}`} term={t} expanded={expanded} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
