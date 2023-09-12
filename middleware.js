export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/buku/:path*",
    "/pustakawan/:path*",
    "/peminjam/:path*",
    "/peminjaman/:path*",
  ],
};
