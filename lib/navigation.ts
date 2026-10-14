export function navigateToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
