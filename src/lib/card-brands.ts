import visa from "@/assets/cards/Visa.svg";
import mastercard from "@/assets/cards/Mastercard.svg";
import amex from "@/assets/cards/Amex.svg";
import discover from "@/assets/cards/Discover.svg";

export type CardBrand = "visa" | "mastercard" | "amex" | "discover";

/** Card-brand artwork (small card-style logos). */
export const cardArt: Record<CardBrand, string> = {
  visa,
  mastercard,
  amex,
  discover,
};

export const cardName: Record<CardBrand, string> = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  discover: "Discover",
};
