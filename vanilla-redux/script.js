const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("inc");
const decreaseEl = document.getElementById("dice");

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return { ...state, value: state.value + 1 };
  } else if (action.type === "decrease") {
    return { ...state, value: state.value - 1 };
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

store.subscribe(render);
render()
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
decreaseEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrease",
  });
});
