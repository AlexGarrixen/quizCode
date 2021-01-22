import * as React from 'react';
import { useRouter } from 'next/router';

type SignatireInActiveLink = (path: string) => boolean;

export const useInActiveLink: SignatireInActiveLink = (path) => {
  const router = useRouter();
  const isActiveLink: boolean = React.useMemo(() => router.pathname === path, [
    path,
    router.pathname,
  ]);

  return isActiveLink;
};
