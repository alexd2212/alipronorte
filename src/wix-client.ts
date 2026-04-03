import { createClient, OAuthStrategy } from '@wix/sdk';
import { products } from '@wix/stores';
import { currentCart } from '@wix/ecom';

export const wixClient = createClient({
  modules: { products, currentCart },
  auth: OAuthStrategy({
    clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID,
  })
});