import {OrderTypes} from 'declarations';

export const createKeysAndOrders = (order: Record<string, OrderTypes>) =>
  Object.entries(order).reduce<{keys: string[]; orders: OrderTypes[]}>(
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
