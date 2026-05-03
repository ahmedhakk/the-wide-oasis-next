export type User = {
  name: string;
  email: string;
  image: string;
};

export interface GoogleProfile {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
}
export interface GoogleAccount {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  id_token: string;
  expires_at: number;
  provider: "google";
  type: "oidc";
  providerAccountId: string;
}

export interface GoogleAuthResponse {
  user: User;
  account: GoogleAccount;
  profile: GoogleProfile;
}
