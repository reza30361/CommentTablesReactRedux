import axios from "axios";

export const getData = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { ...getState().comments, loading: true },
  });
  try {
    if (!localStorage.getItem("comments")) {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      dispatch({
        type: "success",
        payload: { ...getState().comments, data: [...data], loading: true },
      });
      localStorage.setItem("comments", JSON.stringify(getState()));
    }
  } catch (error) {
    dispatch({
      type: "error",
      payload: { ...getState().comments, error: error.message },
    });
  }
};

export const changeName = (index, text) => (dispatch, getState) => {
  // console.log("first")
  const { data } = { ...getState().comments };
  data[index] = { ...data[index], name: text };
  dispatch({
    type: "success",
    payload: { ...getState().comments, data: [...data] },
  });
  localStorage.setItem("comments",JSON.stringify(getState()))

};
export const removeItem = (index) => (dispatch, getState) => {
  const { data } = { ...getState().comments };
  data.splice(index, 1);
  dispatch({
    type: "success",
    payload: { ...getState().comments, data: [...data] },
  });
  data.length ? localStorage.setItem("comments",JSON.stringify(getState())): localStorage.clear();

  
};
