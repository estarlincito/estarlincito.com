import 'server-only';
/**
 * Get verify if is human
 * @example
 * const isHuman = await getReCaptcha(token);
 */
export const getReCaptcha = async (token: string) => {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
  });

  const data = (await res.json()) as { success: boolean; score: number };

  return data.success && data.score > 0.5;
};
