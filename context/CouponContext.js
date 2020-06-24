import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
const blogReducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'RESTORE_NULL':
      return {
        ...prevState,
        userToken: null,
        isLoading: false,
        isSignout: true,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
}
const signIn = (dispatch)=>async data => {
    // In a production app, we need to send some data (usually username, password) to server and get a token
    // We will also need to handle errors if sign in failed
    // After getting token, we need to persist the token using `AsyncStorage`
    // In the example, we'll use a dummy token
    await AsyncStorage.setItem('userToken',data);
    dispatch({ type: 'SIGN_IN', token: data });
  }
  const signOut = (dispatch) =>()=>dispatch({ type: 'SIGN_OUT' })
  const signUp= (dispatch)=>async data => {
    // In a production app, we need to send user data to server and get a token
    // We will also need to handle errors if sign up failed
    // After getting token, we need to persist the token using `AsyncStorage`
    // In the example, we'll use a dummy token

    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });}
   const asdf=(dispatch)=>(data)=>dispatch({ type: 'RESTORE_TOKEN',token: data})
   const a=(dispatch)=>()=>dispatch({ type: 'RESTORE_NULL' })
const redeemCoupon = (dispatch) => {
    return (coupon) => {
        dispatch({ type: 'redeem_coupon', payload: coupon });
    };
};

const useCoupon = (dispatch) => {
    return (id) => {
        dispatch({ type: 'use_coupon', payload: id });
    };
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { signIn, signOut, signUp ,asdf,a},
    {
        isLoading: true,
        isSignout: false,
        userToken: null,
        tables:[
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            tableNum: '1A',
            orders:[{id:1,title:"aasdaasdasda"},{id:2,title:"as1da"},{id:3,title:"asda"}]
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            tableNum: '1B',
            orders:null
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            tableNum: '2A',
            orders:null
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d12',
            tableNum: '2B',
            orders:null
          },
        ]
    }
    
);