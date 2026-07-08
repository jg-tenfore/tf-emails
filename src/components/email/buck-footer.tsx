import { brand } from "@/lib/brand";
import { socialIcons, type SocialIconName } from "./social-icons";

interface BuckFooterProps {
  /** Optional per-email context line, e.g. "You're receiving this because…". */
  reason?: string;
  unsubscribeUrl?: string;
  /** "View in browser" link target. */
  viewInBrowserUrl?: string;
}

/** Generic template placeholders — a club drops in its own details. */
const PLACEHOLDER = {
  name: "Your Golf Course",
  address: "123 Fairway Drive, Anytown, ST 00000",
  phone: "(555) 555-0123",
};

/** The club's social channels, in display order (FB · IG · X). */
const SOCIAL_ORDER: SocialIconName[] = ["facebook", "instagram", "x"];

/**
 * Marketing Buck email footer — a clean, club-only footer: a "reply or call"
 * support line, the course identity (name · address · phone), social channels,
 * and the view-in-browser / unsubscribe links. No TenFore platform branding.
 * Marketing-Buck-only; the transactional emails keep {@link JarretteFooter}.
 */
export const BuckFooter = ({
  reason,
  unsubscribeUrl = "#",
  viewInBrowserUrl = "#",
}: BuckFooterProps) => {
  const socials = SOCIAL_ORDER.map((icon) => brand.social.find((s) => s.icon === icon)).filter(
    (s): s is (typeof brand.social)[number] => Boolean(s),
  );

  return (
    <div className="bg-secondary px-8 py-9 text-center">
      {/* Support line */}
      <p className="text-sm text-tertiary">
        Questions? Just reply to this email or call the pro shop at{" "}
        <span className="font-semibold text-secondary">{PLACEHOLDER.phone}</span>.
      </p>

      <div className="mx-auto mt-6 mb-7 w-full max-w-sm border-t border-secondary" />

      {/* Club identity */}
      <p className="text-md font-semibold text-primary">{PLACEHOLDER.name}</p>
      <p className="mt-1 text-sm text-tertiary">
        {PLACEHOLDER.address} • {PLACEHOLDER.phone}
      </p>

      {/* Social */}
      <div className="mt-5 flex justify-center gap-3">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex size-9 items-center justify-center rounded-full bg-primary text-tertiary ring-1 ring-secondary hover:text-brand-secondary"
            >
              <Icon className="size-4" />
            </a>
          );
        })}
      </div>

      {/* Utility links */}
      <div className="mt-6 text-xs text-quaternary">
        {reason ? <p className="mb-2">{reason}</p> : null}
        <p className="flex flex-wrap items-center justify-center gap-x-2">
          <a href={viewInBrowserUrl} className="underline underline-offset-2 hover:text-brand-secondary">
            View in browser
          </a>
          <span aria-hidden="true">·</span>
          <a href={unsubscribeUrl} className="underline underline-offset-2 hover:text-brand-secondary">
            Unsubscribe
          </a>
        </p>
      </div>
    </div>
  );
};
