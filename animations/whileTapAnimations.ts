import { TargetAndTransition } from 'framer-motion';

export const scaleAnimation: TargetAndTransition = {
  scale: [0.9, 1.2, 1],
  transition: {
    duration: 1.9,
    times: [0, 1.2, 0.7],
    ease: ['easeOut', 'easeInOut', 'easeIn'],
  },
};
