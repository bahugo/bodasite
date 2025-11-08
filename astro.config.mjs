import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://bahugo.github.io',
  base: '/bodasite',
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Roboto",
            cssVariable: "--font-roboto"
        }]
    }
});
