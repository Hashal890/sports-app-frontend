export interface UserDetails {
  name?: string;
  username?: string;
  password?: string;
  age?: number;
}

type ReducerState = {
  loading: boolean;
  error: boolean;
  isAuth: boolean;
  data: any;
};

export interface ReducerInput {
  state: ReducerState;
  type: string;
  payload: any;
}
