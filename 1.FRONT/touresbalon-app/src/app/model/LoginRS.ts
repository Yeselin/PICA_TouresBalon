
export interface LoginRS {
    access_token: string,
    token_type: string,
    expires_in: string,
    refresh_token: string,
    errorCode ?: string,
    message ?: string
}