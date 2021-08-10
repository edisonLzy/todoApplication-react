import { useCallback } from 'react';

const baseUrl = 'https://github.com/login/oauth/authorize';

function getRequestUrl(clientId: string) {
  return `${baseUrl}?client_id=${clientId}`;
}

export function useGithubAuth() {
  const toGithubLogin = useCallback(async () => {
    let a: any = document.createElement('a');
    const requestUrl = getRequestUrl(import.meta.env.VITE_APP_ID);
    a.setAttribute('href', requestUrl);
    a.click();
    a = null;
  }, []);
  return {
    toGithubLogin,
  };
}
