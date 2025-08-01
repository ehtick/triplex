/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
export function flatten<TItem extends { children: TItem[] }>(
  arr: TItem[],
): TItem[] {
  const result: TItem[] = [];

  for (const elem of arr) {
    const children = flatten(elem.children);

    for (const child of children) {
      result.push(child);
    }

    result.push(elem);
  }

  return result;
}

export function unique<TValue extends Array<object>>(arr: TValue): TValue {
  const seen = new Set<string>();

  return arr.filter((item) => {
    const key = JSON.stringify(item);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  }) as TValue;
}
