import { ArrowRight, Calendar, Flag01, Star01 } from "@untitledui/icons";
import {
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
} from "@/components/email";

const COURSE_IMG =
  "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80";

export interface WelcomeEmailProps {
  firstName?: string;
  ctaUrl?: string;
}

const perks = [
  { icon: Calendar, title: "Book tee times 24/7", body: "Reserve online in seconds, any day of the week." },
  { icon: Star01, title: "Member pricing", body: "Save up to 20% on green fees and the pro shop." },
  { icon: Flag01, title: "Track your rounds", body: "Log scores and watch your handicap improve." },
];

export const WelcomeEmail = ({
  firstName = "Jordan",
  ctaUrl = "https://tenforegolf.com/book",
}: WelcomeEmailProps) => {
  return (
    <EmailShell preheader="Welcome to Tenfore Golf — let's get you on the course.">
      <EmailHeader variant="brand" />
      <EmailHero
        imageUrl={COURSE_IMG}
        imageAlt="Sunrise over the fairway"
        eyebrow="Welcome to the club"
        headline={`Great to have you, ${firstName}`}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Your Tenfore Golf account is ready. Whether you're chasing a new
          personal best or just here for a relaxed round with friends, everything
          you need is a tap away.
        </p>

        <div className="mt-6 flex flex-col gap-5">
          {perks.map((p) => (
            <div key={p.title} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
                <p.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{p.title}</p>
                <p className="mt-0.5 text-sm text-tertiary">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CTAButton href={ctaUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book your first tee time
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Questions? Just reply to this email or call us at{" "}
          <span className="font-medium text-secondary">(555) 018-4653</span>.
        </p>
      </EmailSection>

      <EmailFooter />
    </EmailShell>
  );
};
