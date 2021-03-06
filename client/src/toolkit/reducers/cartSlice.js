import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartTotalQuantity:0,
	cartTotalAmount:0

}

const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		addToCart(state,action){
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if(itemIndex >= 0){
				state.cartItems[itemIndex].cartQuantity +=1;
				toast.info(`Еще один товар ${state.cartItems[itemIndex].name} добавлен`, {
					position:'bottom-left'
				});
			}else {
				let tempProduct = {...action.payload,cartQuantity:1};
				state.cartItems.push(tempProduct);
				toast.success(`Товар ${action.payload.name} добавлен в корзину`, {
					position:'bottom-left'
				});
			}
			localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
		},
		removeItemFromCart(state,action){
			const nextCartItems = state.cartItems.filter(
				cartItem => cartItem.id !== action.payload.id
			);

			state.cartItems = nextCartItems;
			localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

			toast.warn(`Товар ${action.payload.name} удален из корзины`, {
				position:'bottom-left'
			});
		},
		decreaseCart(state,action){
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if(state.cartItems[itemIndex].cartQuantity > 1){
				state.cartItems[itemIndex].cartQuantity -=1;

				localStorage.setItem('cartItems',JSON.stringify(state.cartItems));


			} else if(state.cartItems[itemIndex].cartQuantity === 1){
				const nextCartItems = state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				);

				state.cartItems = nextCartItems;
				localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

				toast.warn(`Товар ${action.payload.name} удален из корзины`, {
					position:'bottom-left'
				});
			}
		},
		clearCart(state){
			state.cartItems = [];

			localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

			toast.error('Корзина очищена', {
				position:'bottom-left'
			});
		},
		getTotal(state,action){
			const {total,quantity} =  state.cartItems.reduce((cartTotal,cartItem) => {
				const {price,cartQuantity} = cartItem;
				const itemTotal = price * cartQuantity;

				cartTotal.total +=itemTotal;
				cartTotal.quantity += cartQuantity;

				return cartTotal;

			},{
				total:0,
				quantity:0
			});

			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
})

export const {addToCart,removeItemFromCart,decreaseCart,clearCart,getTotal} = cartSlice.actions;
export default cartSlice.reducer;