export const OPEN_EMAIL_CTA = "open-email-cta";

export type WaitlistType = "professional" | "customer";

export function openEmailCTA(type: WaitlistType) {
  window.dispatchEvent(
    new CustomEvent<{ type: WaitlistType }>(OPEN_EMAIL_CTA, {
      detail: { type },
    })
  );
}