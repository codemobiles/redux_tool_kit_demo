import React from "react";
import { useSelector } from "react-redux";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { counter1Selector } from "./store/slices/counter1Slice";
import { counter2Selector } from "./store/slices/counter2Slice";

type Props = {};

export default function App({}: Props) {
  const counter1Reducer = useSelector(counter1Selector);
  const counter2Reducer = useSelector(counter2Selector);

  return (
    <div>
      <h1>App</h1>
      <span>
        {counter1Reducer.loading && "Loading.."} {counter1Reducer.counter}/
        {counter2Reducer.loading && "Loading.."} {counter2Reducer.counter}
      </span>
      <Page1 />
      <hr />
      <Page2 />
    </div>
  );
}
