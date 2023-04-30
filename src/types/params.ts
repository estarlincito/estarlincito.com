export interface ParamsCat {
  cat: string;
}

export interface ParamsSub extends ParamsCat {
  sub: string;
}

export interface ParamsPost extends ParamsSub {
  post: string;
}
