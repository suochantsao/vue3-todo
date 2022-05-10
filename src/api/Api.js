import request from "./Index";

export const Auth = {
  Login: (data) => {
    request.post("/users/sign_in", data);
  },
  SignUp: (data) => {
    request.post("/users", data);
  },
  SignOut: (data) => {
    request.delete("/users/sign_out", data);
  },
};

export const Todo = {
  InitTodoList: () => {
    request.get("/todos");
  },
  AddTodo: () => {
    request.post("/todos");
  },
  EditTodo: (id, data) => {
    request.put(`/todos/${id}`, data);
  },
  DelTodo: (id, data) => {
    request.delete(`/todos/${id}`, data);
  },
  ChangeStatus: (id) => {
    request.patch(`/todos/${id}/toggle`);
  },
};
