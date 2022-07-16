import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatis } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const checkCategory = () => dispatch(checkStatis());
  return <button type="submit" onClick={checkCategory}>check status</button>;
}

export default Categories;
