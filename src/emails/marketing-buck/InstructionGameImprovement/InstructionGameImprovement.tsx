import { ArrowRight, Star01, Trophy01, Users01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  BuckFooter,
  BuckHeader,
  ProductGrid,
  type ProductGridItem,
  SectionHeading,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";
import { productsByCategory } from "@/lib/store-catalog";

export interface InstructionGameImprovementProps {
  firstName?: string;
  lessonsUrl?: string;
}

const programs = [
  {
    icon: Trophy01,
    title: "Private lessons",
    body: "One-on-one coaching with our PGA pros, tailored to your game.",
  },
  {
    icon: Users01,
    title: "Group clinics",
    body: "Short-game, full-swing, and on-course sessions in small groups.",
  },
  {
    icon: Star01,
    title: "Juniors & beginners",
    body: "Welcoming programs for new golfers, kids, and returning players.",
  },
];

const training = productsByCategory("equipment", "accessories-and-training");
/** A "gear up" cross-sell of practice aids pulled from the live catalog. */
const gear: ProductGridItem[] = [
  { ...training[2], price: "$199.99" }, // Approach S44 Golf GPS Watch
  { ...training[4], price: "$39.99" }, // Putting Thing Training Aid
  { ...training[3], price: "$26.00" }, // Titleist Players Golf Glove
];

/**
 * Marketing Buck — Instruction & Game Improvement. Drives lesson and clinic
 * bookings, with a buy-one-bring-a-friend offer and a practice-aid cross-sell.
 */
export const InstructionGameImprovement = ({
  firstName = golfer.firstName,
  lessonsUrl = "https://www.sagamoregolf.com/lessons",
}: InstructionGameImprovementProps) => {
  return (
    <EmailShell preheader="Take strokes off your game — book a lesson and bring a friend free.">
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.lessonInstruction.src}
        imageAlt={marketingHeroes.lessonInstruction.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Instruction"
        headline="Play your best golf this season"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, one session with our pros can change your game. Pick the
          format that fits you — and right now, every lesson comes with one for a
          friend.
        </p>

        <FeatureList className="mt-6" items={programs} />

        <Callout className="mt-6" tone="success" eyebrow="Limited-time offer">
          Book one lesson and bring a friend's first lesson free — learn together
          and improve faster.
        </Callout>

        <div className="mt-8">
          <CTAButton href={lessonsUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book a Lesson
          </CTAButton>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Gear up to practice" description="Tools our pros recommend." />
        <ProductGrid className="mt-4" items={gear} />
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
