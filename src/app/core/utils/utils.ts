type Sorteable = string | number | any[]

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export const compare = (a: Sorteable, b: Sorteable): number => {
  if (!b) return 1
  if (!a) return -1
  if (Array.isArray(a) && Array.isArray(b)) return a.length - b.length
  if (isString(a) && isString(b)) return a > b ? 1 : -1
  if (!Number.isNaN(a) && !Number.isNaN(b)) return (a as number) - (b as number)
  return 1
}
