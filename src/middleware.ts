import { NextResponse } from "next/server";

// Allow only the landing page and framework/static assets
const ALLOWED_PATHS = [
  "/",                // landing page
  "/_next",           // Next internals
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/images",          // your hero/feature images
  "/manifest.webmanifest",
  "/apple-touch-icon.png",
  "/favicon-32x32.png",
  "/favicon-16x16.png",
];

function isAllowed(pathname: string) {
  return ALLOWED_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(req: Request) {
  const url = new URL(req.url);

  if (!isAllowed(url.pathname)) {
    url.pathname = "/";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Run on everything except static files
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
