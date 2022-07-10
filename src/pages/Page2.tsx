import React from "react";
import { useSelector } from "react-redux";
import {
  counter2Selector,
  increase,
  setValueAsync,
} from "../store/slices/counter2Slice";
import { useAppDispatch } from "../store/store";

type Props = {};

export default function Page2({}: Props) {
  const dispatch = useAppDispatch();
  const counter2Reducer = useSelector(counter2Selector);

  return (
    <div>
      <h4>Page2</h4>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        counter2 - {counter2Reducer.counter}
      </button>

      <button
        onClick={() => {
          dispatch(setValueAsync(0));
        }}
      >
        Async counter2 - {counter2Reducer.counter}
      </button>
    </div>
  );
}
