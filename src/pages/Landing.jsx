import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addCookie} from '../state/action/index'

export default function Landing() {

    const cool = useSelector(state => state.changeCookie);
    console.log(cool)
    const dispatch = useDispatch();

    window.onload(dispatch(addCookie("myHome")))

  return <>
    <button>Mint</button>
    <h1>{cool}</h1>
  </>
}
