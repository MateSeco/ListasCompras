export function capitalize(string) {
  const aux = string.toLowerCase();
  return aux.replace(aux[0], aux[0].toUpperCase());
}
