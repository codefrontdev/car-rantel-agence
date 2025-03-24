const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin()
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,

};

export default withNextIntl(nextConfig);
