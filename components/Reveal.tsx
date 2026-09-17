'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type RevealVariant = 'default' | 'headline' | 'body' | 'image' | 'button' | 'item';
type RevealTag = 'div' | 'section';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileInView' | 'transition' | 'variants'> & {
  as?: RevealTag;
  variant?: RevealVariant;
  delay?: number;
  staggerChildren?: number;
  delayChildren?: number;
};

const variants = {
  default: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  headline: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  body: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  image: { hidden: { opacity: 0, scale: 1.05 }, visible: { opacity: 1, scale: 1 } },
  button: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
};

export default function Reveal({
  children,
  as: Component = 'div',
  variant = 'default',
  delay = 0,
  staggerChildren,
  delayChildren,
  ...props
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const animation = variants[variant];
  const MotionComponent = Component === 'section' ? motion.section : motion.div;

  return (
    <MotionComponent
      {...props}
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animation}
      transition={reducedMotion ? { duration: 0 } : {
        duration: variant === 'image' ? 0.8 : 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        ...(staggerChildren ? { staggerChildren, delayChildren } : {}),
      }}
    >
      {children}
    </MotionComponent>
  );
}
