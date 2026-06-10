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
import { assets } from "@/lib/assets";
import { course, courseImage, golfer } from "@/lib/scenario";

export interface WelcomeEmailProps {
  firstName?: string;
  ctaUrl?: string;
}

const perks = [
  {
    icon: Calendar,
    title: "Book tee times 24/7",
    body: "Reserve online in seconds, any day of the week.",
  },
  {
    icon: Star01,
    title: "Sagamore Pass pricing",
    body: "Save on green fees with waived booking fees and member rates.",
  },
  {
    icon: Flag01,
    title: "Track your rounds",
    body: "Log scores and watch your handicap improve.",
  },
];

export const WelcomeEmail = ({
  firstName = golfer.firstName,
  ctaUrl = course.bookingUrl,
}: WelcomeEmailProps) => {
  return (
    <EmailShell preheader={`Welcome to ${course.name} — let's get you on the course.`}>
      <EmailHeader />
      <EmailHero
        imageUrl={courseImage}
        imageAlt="Sunrise over the fairway"
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Welcome to the club"
        headline={`Great to have you, ${firstName}`}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Your {course.name} account is ready. Whether you're chasing a new
          personal best or here for a relaxed twilight nine with friends,
          everything you need is a tap away.
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
          Questions? Just reply to this email or call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span>.
        </p>
      </EmailSection>

      <EmailFooter />
    </EmailShell>
  );
};
