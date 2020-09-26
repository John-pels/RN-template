import {combineReducers} from 'redux';
import {useSelector, TypedUseSelectorHook} from 'react-redux';

export const RootReducer = combineReducers({});

export type RootState = ReturnType<typeof RootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
