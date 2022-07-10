import React from "react";
import { useSelector } from "react-redux";
import {
  counter1Selector,
  increase,
  setValueAsync,
} from "../store/slices/counter1Slice";
import { useAppDispatch } from "../store/store";

type Props = {};

export default function Page1({}: Props) {
  const dispatch = useAppDispatch();
  const counter1Reducer = useSelector(counter1Selector);

  return (
    <div>
      <h4>Page1</h4>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        counter1 - {counter1Reducer.counter}
      </button>

      <button
        onClick={() => {
          dispatch(setValueAsync(0));
        }}
      >
        Async counter1 - {counter1Reducer.counter}
      </button>
    </div>
  );
}
