export const getLinkedinUrl = (username?: string) => {
  if (!username) return;
  return `https://linkedin.com/in/${username}`;
};
