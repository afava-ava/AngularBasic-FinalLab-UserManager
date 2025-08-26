import { User } from "./user";

export function getFullAddress(user: User): string {
  const { street, suite, city, zipCode } = user.address;
  return `${street}, ${suite}, ${city}, ${zipCode}`;
}