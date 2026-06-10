import { ArrowRight } from "@untitledui/icons";
import {
  CTAButton,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
} from "@/components/email";

interface Article {
  image: string;
  tag: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface NewsletterEmailProps {
  firstName?: string;
  month?: string;
  articles?: Article[];
  promo?: { title: string; body: string; ctaLabel: string; ctaUrl: string };
}

const HERO_IMG =
  "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80";

const defaultArticles: Article[] = [
  {
    image:
      "https://images.unsplash.com/photo-1530028828-25e8270793c5?auto=format&fit=crop&w=600&q=80",
    tag: "Course news",
    title: "The new short-game practice area is open",
    excerpt:
      "Two new bunkers and a 4,000 sq ft chipping green are ready for you to dial in your wedges.",
    url: "https://tenforegolf.com/news/short-game",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=600&q=80",
    tag: "Events",
    title: "Member-Guest tournament — sign-ups close June 25",
    excerpt:
      "Two days, four formats, and the year's best post-round cookout. Grab a partner before spots fill up.",
    url: "https://tenforegolf.com/events/member-guest",
  },
];

export const NewsletterEmail = ({
  firstName = "Jordan",
  month = "June",
  articles = defaultArticles,
  promo = {
    title: "Twilight rounds, half price",
    body: "Tee off after 5 PM any weekday in June and play for 50% off green fees.",
    ctaLabel: "Book a twilight round",
    ctaUrl: "https://tenforegolf.com/book?rate=twilight",
  },
}: NewsletterEmailProps) => {
  return (
    <EmailShell preheader={`${month} at Tenfore Golf — news, events, and a twilight deal.`}>
      <EmailHeader variant="brand" />
      <EmailHero
        imageUrl={HERO_IMG}
        imageAlt="Golfers on the green at dusk"
        eyebrow={`${month} newsletter`}
        headline={`What's happening this ${month}`}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, here's everything worth knowing around the club this
          month — plus a deal we think you'll like.
        </p>

        <div className="mt-7 flex flex-col gap-7">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.url}
              className="group block overflow-hidden rounded-xl border border-secondary"
            >
              <img
                src={a.image}
                alt=""
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-semibold tracking-wide text-brand-secondary uppercase">
                  {a.tag}
                </span>
                <p className="mt-1 text-md font-semibold text-primary">
                  {a.title}
                </p>
                <p className="mt-1 text-sm text-tertiary">{a.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary">
                  Read more
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </EmailSection>

      <EmailSection tone="brand" align="center" padding="lg">
        <h2 className="text-display-xs font-semibold text-white">
          {promo.title}
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-md text-white/80">
          {promo.body}
        </p>
        <div className="mt-6 flex justify-center">
          <CTAButton href={promo.ctaUrl} color="secondary" size="lg">
            {promo.ctaLabel}
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you opted in to Tenfore Golf news and offers." />
    </EmailShell>
  );
};
