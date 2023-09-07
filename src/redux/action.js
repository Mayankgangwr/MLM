export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

// export const addUser = (user) => {
//     return (dispatch) => {
//       setTimeout(() => {
//         dispatch(addUserAsync(user)); //we call the dispatch function inside another dispatch with help of redux thunk
//       }, 5000);
//     };
//   };

//   export const addUserAsync = (user) => {
//     return {
//       type: "ADD_USER",
//       payload: user
//     };
//   };

export const editUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};

export const removeUser = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};
