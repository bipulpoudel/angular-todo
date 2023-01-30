import IBase from "./IBase";

export default interface Todo extends IBase {
  title: string;
  description?: string;
  completed: boolean;
  user: string;
}
