import { Hono } from 'hono'
import { toSlug } from './utils/toSlug'
import { generateRandomNumberId } from './utils/generateRandomNumberId';
const app = new Hono()


var chaine = toSlug("Salam hceéj aAA");
console.log(chaine);

console.log(generateRandomNumberId())


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
