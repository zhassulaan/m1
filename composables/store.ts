export const useIsDevice = () => useState<boolean>("device", () => true)
export const useUser = () => useState<string>("user", () => "")
export function saveLang(language: string): void {
  if (process.client) {
    localStorage.setItem("langM1", language);
  }
}
export function getLang(): string | null {
  if (process.client) {
    const lang = localStorage.getItem("langM1");
    return lang || "ru";
  }
  return "ru";
}
export function saveAuthTokens(accessToken: string, refreshToken: string): void {
  if (process.client) {
    localStorage.setItem("accessTokenM1", accessToken);
    localStorage.setItem("refreshTokenM1", refreshToken);
    window.location.reload();
  }
}
export function removeAuthTokens(): void {
  if (process.client) {
    localStorage.removeItem("accessTokenM1");
    localStorage.removeItem("refreshTokenM1");
    window.location.reload();
  }
}
export function getAccessToken(): string | null {
  if (process.client) {
    return localStorage.getItem("accessTokenM1");
  }
  return null;
}
export function getRefreshToken(): string | null {
  if (process.client) {
    return localStorage.getItem("refreshTokenM1");
  }
  return null;
}
export async function getUserInfo(): Promise<any | null> {
  if (process.client) {
    const accessToken = getAccessToken();
    if (accessToken) {
      const { data: user } = await useFetch('http://86.107.45.124:8007/api/user/user_information/', {
        headers: {
          Authorization: `Bearer ${ accessToken }`
        }
      });
      return user || null;
    }
  }
  return null;
}
