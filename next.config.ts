// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // reactCompiler: true,

//   /* Configurations i added */
//   reactStrictMode: false,
//   compiler: {
//     styledComponents: true, // ✅ Enables built-in styled-components support
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["raw.githubusercontent.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
