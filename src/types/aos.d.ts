declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    easing?: string;
    delay?: number;
    offset?: number;
    anchorPlacement?: string;
  }

  const AOS: {
    init: (options?: AosOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
