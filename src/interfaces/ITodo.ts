import IBase from "./IBase";

export default interface Todo extends IBase {
  title: string;
  description?: string;
  user: string;
}
