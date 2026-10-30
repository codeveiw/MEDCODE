import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

const middleware = createMiddleware(routing);

export default middleware;
export { middleware as proxy };

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
