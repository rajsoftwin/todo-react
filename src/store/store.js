import { configureStore } from '@reduxjs/toolkit';
import slicerfunction from '../reducers/index'


// const store = configureStore({
//   reducer: reducer, 
// });

// export default store;

const store = configureStore({
    reducer  : 
    {
      todos :slicerfunction
    }
});
export default store;