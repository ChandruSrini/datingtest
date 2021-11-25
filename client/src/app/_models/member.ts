import { Photo } from "./photo";

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  gender: string;
  inroduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
  created: Date;
  lastActive: Date;
}
