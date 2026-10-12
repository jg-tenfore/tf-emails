import type { ReactNode } from "react";
import { ArrowRight, User01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import type { TermsNotice, TermsSection } from "@/lib/tee-time-terms";
import { Callout } from "./callout";
import { Checklist } from "./checklist";
import { SectionHeading } from "./section-heading";

export interface TermsAndConditionsProps {
  /** `draft` marks wording that still needs course review. */
  sections: (TermsSection & { draft?: boolean })[];
  title?: ReactNode;
  description?: ReactNode;
  /** Header at the top of the card naming who the first-person terms are for. */
  audience?: { title: ReactNode; body: ReactNode };
  /** Highlighted alerts above the terms (policy changes, partner offers). */
  notices?: TermsNotice[];
  /** Closing "by making this booking…" statement. */
  acknowledgment?: ReactNode;
  /** Link to the full terms — for emails that only show a subset. */
  moreLink?: { href: string; label: string };
  className?: string;
}

/**
 * The course's booking terms, grouped into titled sections inside one bordered
 * card — the fine print that closes out tee time emails. Notices sit above the
 * card; the acknowledgment sits below it on a muted panel.
 */
export const TermsAndConditions = ({
  sections,
  title = "Terms & conditions",
  description,
  audience,
  notices,
  acknowledgment,
  moreLink,
  className,
}: TermsAndConditionsProps) => (
  <div className={className}>
    <SectionHeading title={title} description={description} />

    {notices?.length ? (
      <div className="mt-4 flex flex-col gap-3">
        {notices.map((n, i) => (
          <Callout key={i} tone={n.tone} eyebrow={n.eyebrow}>
            {n.body}
            {n.link ? (
              <>
                {" "}
                <a
                  href={n.link.href}
                  className="font-medium text-brand-secondary underline underline-offset-2"
                >
                  {n.link.label}
                </a>
              </>
            ) : null}
          </Callout>
        ))}
      </div>
    ) : null}

    <div className="mt-4 overflow-hidden rounded-xl border border-secondary">
      {audience ? (
        <div className="flex items-start gap-3 border-b border-secondary bg-brand-primary px-5 py-4">
          <User01 className="mt-0.5 size-5 shrink-0 text-fg-brand-primary" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-brand-secondary">{audience.title}</p>
            <p className="mt-1 text-sm text-secondary">{audience.body}</p>
          </div>
        </div>
      ) : null}
      <div className="px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
        {sections.map((s) => (
          <div key={s.title} className="py-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
              {s.title}
              {s.draft ? (
                <Badge type="pill-color" color="warning" size="sm">
                  Draft
                </Badge>
              ) : null}
            </h3>
            <Checklist className="mt-2" items={s.items} />
          </div>
        ))}
      </div>
    </div>

    {acknowledgment ? (
      <div className="mt-4 rounded-lg bg-secondary px-4 py-3.5">
        <p className="text-xs font-semibold tracking-wide text-quaternary uppercase">
          Acknowledgment
        </p>
        <p className="mt-1 text-sm text-secondary">{acknowledgment}</p>
      </div>
    ) : null}

    {moreLink ? (
      <a
        href={moreLink.href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary"
      >
        {moreLink.label}
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    ) : null}
  </div>
);
