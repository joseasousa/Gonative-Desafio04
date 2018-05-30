export const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
  UPDATE_QTY: 'cart/UPDATE_QTY',
};

const initialState = {
  data: [],
  subTotal: 0,
  inputQty: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
    {
      let items = state
        .data
        .map((item) => {
          if (item.id === action.payload.item.id) {
            item.qty += action.payload.item.qty;
            return item;
          }
          return item;
        });

      const it = state
        .data
        .filter(item => item.id === action.payload.item.id);
      if (it.length === 0) {
        items = [
          ...items, {
            id: action.payload.item.id,
            image: action.payload.item.image,
            name: action.payload.item.name,
            brand: action.payload.item.brand,
            price: action.payload.item.price,
          },
        ];
      }
      return {
        data: items,
        subTotal: items.reduce((total, item) => total + (item.price * item.qty), 0),
      };
    }
    case Types.REMOVE_ITEM:
    {
      const items = state
        .data
        .filter(item => item.id !== action.payload.id);
      return {
        data: items,
        subTotal: items.reduce((total, item) => total + (item.price * item.qty), 0),
      };
    }
    case Types.UPDATE_QTY:
    {
      // localiza item e altera qty
      const items = state
        .data
        .map((item) => {
          if (item.id === action.payload.item.id) {
            item.qty = action.payload.term;
          }
          return item;
        });
      return {
        data: items,
        subTotal: items.reduce((total, item) => total + (item.price * item.qty), 0),
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  addItem: item => ({ 
type: Types.ADD_ITEM,
payload: {
    item,
  }
 }),
  removeItem: id => ({
 type: Types.REMOVE_ITEM,
payload: {
    id,
  } 
}),
  updateQty: (term, item) => ({
    type: Types.UPDATE_QTY,
    payload: {
      term,
      item,
    },
  }),
};
