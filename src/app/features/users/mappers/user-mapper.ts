import { User } from "../models/user";

export function mapApiUser(apiUser: any): User {
  // Split full name into first and last name
  return {
    id: apiUser.id,
    firstName: apiUser.name.split(' ')[0],
    lastName: apiUser.name.split(' ').slice(1).join(' '),
    email: apiUser.email,
    avatar: `https://i.pravatar.cc/150?img=1${apiUser.id}` // optional
  };
}