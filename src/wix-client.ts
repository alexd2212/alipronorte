import { createClient, OAuthStrategy } from '@wix/sdk';
import { products } from '@wix/stores';
import { currentCart } from '@wix/ecom';

const clientId = import.meta.env.PUBLIC_WIX_CLIENT_ID;

// Aviso en consola por si la variable falla en el servidor
if (!clientId) {
  console.error("🚨 ERROR CRÍTICO: No se encontró PUBLIC_WIX_CLIENT_ID en las variables de entorno.");
}

export const wixClient = createClient({
  modules: { products, currentCart },
  auth: OAuthStrategy({
    clientId: clientId || '',
  })
});