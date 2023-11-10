export const randomId = (tag = '') =>
  tag + Math.trunc(Math.random() * 100_000).toString();
