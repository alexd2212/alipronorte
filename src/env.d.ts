/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WIX_CLIENT_ID: string;
  // Si en el futuro añades más variables de entorno en tu .env, decláralas aquí también
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}