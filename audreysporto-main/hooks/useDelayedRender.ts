import { useEffect, useState } from "react";

interface DelayConfig {
  enterDelay?: number;
  exitDelay?: number;
}

export default function useDelayedRender(show: boolean, config: DelayConfig = {}) {
  const { enterDelay = 0, exitDelay = 0 } = config;

  const [mounted, setMounted] = useState(show);
  const [rendered, setRendered] = useState(show);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      // When menu opens
      if (!mounted) setMounted(true); // mount immediately
      timeout = setTimeout(() => setRendered(true), enterDelay);
    } else {
      // When menu closes
      setRendered(false);
      timeout = setTimeout(() => setMounted(false), exitDelay);
    }

    return () => clearTimeout(timeout);
  }, [show, enterDelay, exitDelay, mounted]);

  return { mounted, rendered };
}
