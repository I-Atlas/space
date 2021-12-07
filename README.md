# 🌌 Space

![GitHub](https://img.shields.io/github/license/I-Atlas/space?style=flat-square)
![Vercel](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fbolotov-iliya.space%2F)

<p align="center"><img src="https://i.imgur.com/IZ7fQG2.png"></p>

## 👨‍💻 Technologies used

- TypeScript
- Next.js
- Chakra UI
- Framer Motion

## 🚀 PWA

- `yarn add next-pwa`
- add meta tags
- edit `next.config.js`
```js
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.child_process = false;
    }
    return config;
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
  },
});
```

## 📑 License

The project is licensed under the [GNU Affero General Public License 3.0](https://github.com/I-Atlas/evstifeevee/blob/main/LICENSE).
