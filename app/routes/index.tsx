import { css } from "hono/css";
import { createRoute } from "honox/factory";
// import Counter from '../islands/counter'

export default createRoute((c) => {
  return c.json({ a: "a" });
});
