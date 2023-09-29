import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://frolicking-belekoy-c42902.netlify.app",
  integrations: [preact()]
});