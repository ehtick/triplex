/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
export default `
html {
  --x-bg-hovered: rgb(0 0 0 / 0.05);
  --x-bg-inverse: rgb(0 0 0 / 0.9);
  --x-bg-neutral: rgb(0 0 0 / 0.05);
  --x-bg-pressed: rgb(0 0 0 / 0.1);
  --x-bg-selected: rgb(220, 236, 255);
  --x-bg-surface: rgb(255 255 255);
  --x-border: rgb(163 163 163);
  --x-brand: rgb(0 0 0);
  --x-text-inverse-subtle: rgb(230 230 230);
  --x-text-inverse: rgb(255 255 255 / 0.95);
  --x-text-link: rgb(59 130 246);
  --x-text-selected: rgb(59 130 246);
  --x-text-subtle: rgb(38 38 38);
  --x-text-subtlest: rgb(82 82 82);
  --x-text: rgb(23 23 23);
}

@media (prefers-color-scheme: dark) {
  html {
    --x-bg-hovered: rgb(255 255 255 / 0.05);
    --x-bg-inverse: rgb(255 255 255 / 0.9);
    --x-bg-neutral: rgb(255 255 255 / 0.1);
    --x-bg-pressed: rgb(255 255 255 / 0.1);
    --x-bg-selected: rgb(255 255 255 / 0.1);
    --x-bg-surface: rgb(17 17 17);
    --x-border: rgb(63 63 63);
    --x-brand: rgb(255 255 255);
    --x-text-inverse-subtle: rgb(17 17 17);
    --x-text-inverse: rgb(17 17 17);
    --x-text-link: rgb(96 165 250);
    --x-text-selected: rgb(96 165 250);
    --x-text-subtle: rgb(192 192 192);
    --x-text-subtlest: rgb(144 144 144);
    --x-text: rgb(231 231 231);
  }
}
`;
