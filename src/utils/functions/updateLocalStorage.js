/**
 * Fonction qui permet d'écouter les évènements globales
 * Permet notamment de gérer dynamiquement les states concernant le localStorage
 */

export const updateLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: value }))
}
