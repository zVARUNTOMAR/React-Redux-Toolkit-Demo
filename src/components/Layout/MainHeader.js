import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { cartActions } from '../../store/cart-store';
import { useDispatch,useSelector } from "react-redux";

const MainHeader = (props) => {

  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state)=>state.cart.isVisible);

  const cartToggleHandler = ()=>{
    dispatch(cartActions.toggleVisibility());
    console.log(cartIsVisible);
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onCartToggle={cartToggleHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
