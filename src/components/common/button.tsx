import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const classes = ['nexus-btn', variant, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
