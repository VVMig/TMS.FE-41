export function sum(a: number, b: number) {
  return a + b;
}

export const insertInArray = (array: any[], element: any, index: number) => {
  const firstPart = array.slice(0, index);
  const secondPart = array.slice(index);

  if (array.length <= index) {
    return array;
  }

  return [...firstPart, element, ...secondPart];
};
