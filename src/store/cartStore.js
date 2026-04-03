import { atom } from 'nanostores';
// Asegúrate de que la ruta apunte a donde tienes tu cliente de Wix
import { wixClient } from '../wix-client.ts'; 

// 1. EL ESTADO GLOBAL
// Aquí guardaremos el carrito completo que nos devuelve Wix.
// Inicializamos en null porque hasta que no cargue la página, no sabemos qué hay.
export const cartStore = atom(null);

// 2. CARGAR EL CARRITO (Al entrar a la web)
export async function loadCart() {
  try {
    // Le preguntamos a Wix: "¿Este usuario ya tiene un carrito abierto?"
    const currentCart = await wixClient.currentCart.getCurrentCart();
    
    if (currentCart) {
      cartStore.set(currentCart); // Guardamos los datos en nuestro store
    }
  } catch (error) {
    // Si da error, normalmente significa que el carrito no existe aún (está vacío)
    console.log("El carrito está vacío o es un usuario nuevo.");
    cartStore.set(null);
  }
}

// 3. AÑADIR UN PRODUCTO
export async function addToCart(productId, quantity = 1) {
  try {
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [{
        catalogReference: {
          // IMPORTANTE: Este ID largo es el identificador universal interno 
          // que usa Wix para saber que es un producto de "Wix Stores". ¡No lo cambies!
          appId: "1380b703-ce81-ff05-f115-39571d94dfcd", 
          catalogItemId: productId
        },
        quantity: quantity
      }]
    });
    
    // Wix nos devuelve el carrito actualizado, así que actualizamos nuestro store
    cartStore.set(response.cart);
    return true; // Éxito

  } catch (error) {
    console.error("🚨 Error al añadir a Wix:", error);
    return false; // Fallo
  }
}

// 4. LIMPIAR EL CARRITO (Opcional, útil para pruebas)
export function clearLocalCart() {
  cartStore.set(null);
}