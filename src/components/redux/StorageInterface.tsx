export interface globalStore{
    authentication : authentication
}

export interface authentication {
    access_token: string
    token_type: string
    expires_in: number
    scope: string
  }