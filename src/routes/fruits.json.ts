import * as db from '$lib/database';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
  const fruits = await db.listFruits()
  return {
    body: fruits
  }
}