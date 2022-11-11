import { cartActions } from "./cart-store";
import { cartProductActions } from "./cart-product-store";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reactlearning-253d5-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch Data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartProductActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reactlearning-253d5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
