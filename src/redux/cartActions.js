import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart');
export const decrement = createAction('cart/decrement');
export const deleteFromCart = createAction('cart/deleteFromCart');
export const calculatePrice = createAction('cart/calculatePrice');
