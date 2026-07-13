import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function useScrollSpy(sectionIds: string[], activeId: string) {
  const navigate = useNavigate();
  const isProgrammaticRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIdRef = useRef(activeId);

  // Maintain latest activeId value in ref
  activeIdRef.current = activeId;

  // Programmatic scroll trigger (used when sidebar links are clicked)
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isProgrammaticRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);

    // Scroll to the targeted header element
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Release the navigation scroll spy lock after smooth scroll completes
    lockTimerRef.current = setTimeout(() => {
      isProgrammaticRef.current = false;
    }, 850);
  }, []);

  useEffect(() => {
    // Fetch all elements matching the sidebar ids
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Configure the observer's viewport bounding box:
    // Focuses on the top-to-middle reading slice (from 25% down from top to 45% down from top)
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0,
    };

    const intersectingStates: Record<string, boolean> = {};

    const observer = new IntersectionObserver((entries) => {
      // Discard intersection updates triggered by programmatic scrollToSection
      if (isProgrammaticRef.current) return;

      entries.forEach((entry) => {
        intersectingStates[entry.target.id] = entry.isIntersecting;
      });

      // Find the first intersecting section in the defined page order
      let nextActiveId: string | null = null;
      for (const id of sectionIds) {
        if (intersectingStates[id]) {
          nextActiveId = id;
          break;
        }
      }

      // If a section is intersecting and is different from current route parameter, update it
      if (nextActiveId && nextActiveId !== activeIdRef.current) {
        navigate(`/docs/${nextActiveId}`, { replace: true });
      }
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [sectionIds, navigate]);

  return { scrollToSection, isProgrammaticRef };
}
