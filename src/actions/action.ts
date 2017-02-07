import {Action as BaseAction} from "redux/index";

export interface Action extends BaseAction {
  type: string;
  payload: any;
  error?: boolean;
  meta?: any;
}
