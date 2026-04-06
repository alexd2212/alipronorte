import { createClient, OAuthStrategy } from '@wix/sdk';
import { products } from '@wix/stores';
import { currentCart } from '@wix/ecom';

export const wixClient = createClient({
  modules: { products, currentCart },
  auth: OAuthStrategy({
    clientId: "1380b703-ce81-ff05-f115-39571d94dfcd", // Pon tu ID real aquí
  })
});