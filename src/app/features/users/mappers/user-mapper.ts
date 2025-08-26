import { User } from "../models/user";

export function mapApiUser(apiUser: any): User {
  // Split full name into first and last name
  return {
    id: apiUser.id,
    name: apiUser.name,
    username: apiUser.username,
    email: apiUser.email,
    phone: apiUser.phone,
    address: {
      street: apiUser.address.street,
      suite: apiUser.address.suite,
      city: apiUser.address.city,
      zipCode: apiUser.address.zipCode
    },
    company: apiUser.company.name,
    avatar: `https://i.pravatar.cc/150?img=1${apiUser.id}` // optional
  };
}