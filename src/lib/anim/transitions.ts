interface Transition {
  duration: number;
  ease: [number, number, number, number];
}

interface SpringTransition {
  type: 'spring';
  stiffness: number;
  damping: number;
  delay?: number;
  duration?: number;
}

interface TweenTransition {
  type: 'tween';
  ease: string;
  delay?: number;
  duration?: number;
}

interface StaggerTransition {
  staggerChildren: number;
  delayChildren: number;
}

type AnimationTransition = SpringTransition | TweenTransition | StaggerTransition;

interface Variants {
  hidden: Variant;
  show: Variant | ((i: number) => Variant);
  initial?: Variant;
  enter?: Variant | ((i: number) => Variant);
  exit?: Variant | ((i: number) => Variant);
  open?: Variant;
  closed?: Variant;
}

interface Variant {
  x?: string | number;
  y?: string | number;
  scale?: number;
  opacity?: number;
  rotate?: number;
  transition?: AnimationTransition;
}

export const transition1: Transition = {
  duration: 1.4,
  ease: [0.6, 0.01, 0.01, 0.9],
};


export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
      duration: 1.25,
      delay,
    },
  },
});


export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i: number = 1): Variant => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};