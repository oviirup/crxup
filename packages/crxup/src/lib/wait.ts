/**
 * Waits for the specified number of milliseconds before resolving
 *
 * @param ms Number of milliseconds to wait
 */
export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
