import {createAction} from '@reduxjs/toolkit';

export const CHIEN = createAction('filter/CHIEN');
export const CHAT = createAction('filter/CHAT');
export const NAC = createAction('filter/NAC');
export const IS_CHECKED_DOG = createAction('filter/IS_CHECKED_DOG')
export const IS_CHECKED_CAT = createAction('filter/IS_CHECKED_CAT')
export const IS_CHECKED_NAC = createAction('filter/IS_CHECKED_NAC')
export const FILTERED_SPECIES = createAction('filter/FILTERED_SPECIES')