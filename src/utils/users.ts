import {FilterTypes} from 'declarations';

export const createKeysAndOrders = (order: Record<string, FilterTypes>) =>
  Object.entries(order).reduce<{keys: string[]; orders: FilterTypes[]}>(
    (acc, [key, value]) => ({
      ...acc,
      keys: [...acc.keys, key],
      orders: [...acc.orders, value]
    }),
    {
      keys: [],
      orders: []
    }
  );
