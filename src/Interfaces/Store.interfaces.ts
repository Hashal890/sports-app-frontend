export interface UserDetails {
  fName?: string;
  lName?: string;
  username?: string;
  password?: string | number;
  age?: number;
}

type ReducerState = {
  loading: boolean;
  error: boolean;
  isAuth?: boolean;
  data?: any;
};

export interface ReducerInput {
  state: ReducerState;
  type: string;
  payload: any;
}
