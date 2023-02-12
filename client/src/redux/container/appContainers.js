import { connect } from 'react-redux'
import SignIn from '../../pages/SignIn';
import { addToCart } from "../actions/index";
import { tokenGenerate } from '../actions/index';

const mapStateToProps = (state) => {
  return { token: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (params) => dispatch(addToCart(params)),
    tokenGenerate: (params) => dispatch(tokenGenerate(params)),
    dispatch
  }
}

export const Log = connect(mapStateToProps, mapDispatchToProps)(SignIn);