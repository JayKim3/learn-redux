import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";

// state.getState()의 반환 객체의 상태가 useSelector의 state(리덕스의 현재상태)로
// useSelector-> 상태를 조회하는 Hook
function CounterContainer() {
  const { number, diff } = useSelector(
    state => ({
      // 매번 selector에서 새로운 객체를 만들기 때문에 최적화 해줘야함
      number: state.counter.number,
      diff: state.counter.diff
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
