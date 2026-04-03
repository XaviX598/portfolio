"use client";

import { useEffect } from "react";

export default function MotionRuntime() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-runtime-ready");

    const progressBar = document.querySelector<HTMLElement>(".progress-bar");

    const handleScrollProgress = () => {
      if (!progressBar) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll <= 0 ? 0 : Math.min(window.scrollY / maxScroll, 1);
      progressBar.style.transform = `scaleX(${ratio})`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-inview", entry.isIntersecting);
        });
      },
      {
        threshold: 0.24,
        rootMargin: "-10% 0px -12% 0px",
      }
    );

    const observeInviewNodes = () => {
      const revealNodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-inview]")
      );

      revealNodes.forEach((node) => {
        if (node.dataset.inviewObserved === "1") return;
        node.dataset.inviewObserved = "1";
        observer.observe(node);
      });
    };

    observeInviewNodes();

    const mutationObserver = new MutationObserver(() => {
      observeInviewNodes();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    handleScrollProgress();
    window.addEventListener("scroll", handleScrollProgress, { passive: true });
    window.addEventListener("resize", handleScrollProgress);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("motion-runtime-ready");
      window.removeEventListener("scroll", handleScrollProgress);
      window.removeEventListener("resize", handleScrollProgress);
    };
  }, []);

  return null;
}
