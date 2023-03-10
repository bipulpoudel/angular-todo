import IBase from './IBase';

export default interface IUser extends IBase {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: string;
}
