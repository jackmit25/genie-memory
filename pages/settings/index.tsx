import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SettingsIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to organisation-profile as the default settings page
    router.replace('/settings/organisation-profile');
  }, [router]);

  return null;
}
