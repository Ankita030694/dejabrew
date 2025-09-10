'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to reservations page since we removed the dashboard nav
    router.push('/admin/reservationdata');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--dejabrew-dark)' }}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--dejabrew-gold)' }}></div>
        <p className="text-lg text-white">Redirecting to reservations...</p>
      </div>
    </div>
  );
}
