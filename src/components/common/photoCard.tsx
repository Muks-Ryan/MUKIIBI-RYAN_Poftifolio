import { useState } from 'react';

type PhotoCardProps = {
  src?: string;
  alt?: string;
  name: string;
  subtitle: string;
  caption?: string;
};

export function PhotoCard({ src, alt, name, subtitle, caption = 'Profile' }: PhotoCardProps) {
  const [imageUnavailable, setImageUnavailable] = useState(!src);
  const showPlaceholder = !src || imageUnavailable;

  return (
    <figure className="photo-card glass-panel">
      <div className="photo-card__frame">
        {showPlaceholder ? (
          <div className="photo-card__placeholder" role="img" aria-label={`${name} portrait placeholder`}>
            <span className="photo-card__initials" aria-hidden="true">
              {name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase()}
            </span>
            <span className="photo-card__hint">Portrait photo</span>
          </div>
        ) : (
          <img
            className="photo-card__image"
            src={src}
            alt={alt ?? name}
            onError={() => setImageUnavailable(true)}
          />
        )}
        <span className="photo-card__corner photo-card__corner--top" aria-hidden="true" />
        <span className="photo-card__corner photo-card__corner--bottom" aria-hidden="true" />
      </div>
      <figcaption className="photo-card__caption">
        <span className="photo-card__label">{caption}</span>
        <strong>{name}</strong>
        <span>{subtitle}</span>
      </figcaption>
    </figure>
  );
}
