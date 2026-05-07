export const EPIC_NAVIGATE_TO_EVENT = "epicNavigateTo";

export function navigateToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(EPIC_NAVIGATE_TO_EVENT, {
      detail: { sectionId },
    }),
  );
}
