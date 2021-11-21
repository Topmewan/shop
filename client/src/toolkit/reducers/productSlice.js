// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
//
// const initialState = {
//     items:[],
//     status:null,
//     error:null,
//     isLoading: false,
// }
//
// export const productsFetch = createAsyncThunk(
//     'products/productsFetch',
//     async (_,thunkAPI)=> {
//     try {
//         const res = await axios.get('http://localhost:5000/products');
//         return res.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue('Could not fetch data')
//     }
// })
//
// const productSlice = createSlice({
//     name:'ProductSlice',
//     initialState,
//     reducers:{
//
//     },
//     extraReducers:{
//         [productsFetch.pending]:(state,action) => {
//             state.isLoading = true;
//             state.status = 'pending';
//
//
//         },
//         [productsFetch.fulfilled]:(state,action) => {
//             state.isLoading = false;
//             state.error='';
//
//             state.status = 'success';
//             state.items = action.payload;
//         },
//         [productsFetch.rejected]:(state,action) => {
//             state.isLoading = false;
//
//             state.status = 'reject';
//             state.error = action.payload;
//         },
//     }
// });
//
// export default  productSlice.reducer;
//
