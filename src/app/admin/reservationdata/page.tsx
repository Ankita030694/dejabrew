'use client';

import { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

interface ReservationData {
  id: string;
  createdAt: any;
  date: string;
  email: string;
  guests: string;
  name: string;
  occasion: string;
  phone: string;
  specialRequests: string;
  time: string;
}

export default function ReservationData() {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReservations, setFilteredReservations] = useState<ReservationData[]>([]);
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const reservationsQuery = query(
          collection(db, 'form'),
          orderBy('createdAt', 'desc')
        );
        const reservationsSnapshot = await getDocs(reservationsQuery);
        const reservationsData = reservationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ReservationData[];

        setReservations(reservationsData);
        setFilteredReservations(reservationsData);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  useEffect(() => {
    let filtered = reservations;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(reservation =>
        reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation.phone.includes(searchTerm) ||
        reservation.occasion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation.specialRequests.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply date filter
    if (dateFilter) {
      filtered = filtered.filter(reservation => reservation.date === dateFilter);
    }

    setFilteredReservations(filtered);
  }, [searchTerm, dateFilter, reservations]);

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getUpcomingReservations = () => {
    const today = new Date().toISOString().split('T')[0];
    return reservations.filter(r => r.date >= today);
  };

  const getTodayReservations = () => {
    const today = new Date().toISOString().split('T')[0];
    return reservations.filter(r => r.date === today);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--dejabrew-dark)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--dejabrew-gold)' }}></div>
          <p className="text-lg text-white">Loading reservations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--dejabrew-dark)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--dejabrew-gold)' }}>
            Reservation Management
          </h1>
          <p className="text-lg text-white/80">
            Manage customer table reservations
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="rounded-lg shadow-md p-6 border-l-4" style={{ backgroundColor: 'var(--dejabrew-dark-light)', borderLeftColor: 'var(--dejabrew-gold)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--dejabrew-gold)' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Total Reservations</p>
                <p className="text-2xl font-bold text-white">{reservations.length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md p-6 border-l-4" style={{ backgroundColor: 'var(--dejabrew-dark-light)', borderLeftColor: 'var(--dejabrew-gold-light)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--dejabrew-gold-light)' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Today's Reservations</p>
                <p className="text-2xl font-bold text-white">{getTodayReservations().length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md p-6 border-l-4" style={{ backgroundColor: 'var(--dejabrew-dark-light)', borderLeftColor: 'var(--dejabrew-gold)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--dejabrew-gold)' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Upcoming</p>
                <p className="text-2xl font-bold text-white">{getUpcomingReservations().length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md p-6 border-l-4" style={{ backgroundColor: 'var(--dejabrew-dark-light)', borderLeftColor: 'var(--dejabrew-gold-light)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--dejabrew-gold-light)' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Total Guests</p>
                <p className="text-2xl font-bold text-white">
                  {reservations.reduce((total, r) => total + parseInt(r.guests || '0'), 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="rounded-lg shadow-md p-6 mb-6" style={{ backgroundColor: 'var(--dejabrew-dark-light)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by name, email, phone, occasion..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-transparent placeholder-white/50 text-white focus:outline-none focus:placeholder-white/70 focus:ring-1 focus:ring-2"
              style={{ borderColor: 'var(--dejabrew-gold)' }}
              />
            </div>
            <div>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="block w-full px-3 py-2 border rounded-md leading-5 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-2"
                style={{ borderColor: 'var(--dejabrew-gold)' }}
              />
            </div>
          </div>
        </div>

        {/* Reservation Table */}
        <div className="rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--dejabrew-dark-light)' }}>
          <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--dejabrew-gold)' }}>
            <h3 className="text-lg font-medium text-white">
              Reservations ({filteredReservations.length})
            </h3>
          </div>

          {filteredReservations.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-white">No reservations</h3>
              <p className="mt-1 text-sm text-white/60">
                {searchTerm || dateFilter ? 'No reservations match your search criteria.' : 'No reservations have been made yet.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y" style={{ borderColor: 'var(--dejabrew-gold)' }}>
                <thead className="bg-black/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Guests
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Occasion
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'var(--dejabrew-gold)' }}>
                  {filteredReservations.map((reservation) => {
                    const isToday = reservation.date === new Date().toISOString().split('T')[0];
                    const isUpcoming = reservation.date >= new Date().toISOString().split('T')[0];
                    
                    return (
                      <tr key={reservation.id} className="hover:bg-black/20 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-white">{reservation.name}</div>
                            {reservation.specialRequests && (
                              <div className="text-sm text-white/60 max-w-xs truncate" title={reservation.specialRequests}>
                                {reservation.specialRequests}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white/80">
                            {new Date(reservation.date).toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="text-sm text-white/60">{reservation.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: 'var(--dejabrew-gold)', color: 'black' }}>
                            {reservation.guests} {parseInt(reservation.guests) === 1 ? 'Guest' : 'Guests'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white/80 capitalize">{reservation.occasion}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white/80">{reservation.email}</div>
                          <div className="text-sm text-white/60">{reservation.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isToday 
                              ? 'text-black' 
                              : isUpcoming 
                                ? 'text-black' 
                                : 'text-white'
                          }`} style={{ 
                            backgroundColor: isToday 
                              ? 'var(--dejabrew-gold)' 
                              : isUpcoming 
                                ? 'var(--dejabrew-gold-light)' 
                                : 'var(--dejabrew-gold-dark)' 
                          }}>
                            {isToday ? 'Today' : isUpcoming ? 'Upcoming' : 'Past'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <a
                              href={`mailto:${reservation.email}`}
                              className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-black transition-colors duration-200"
                              style={{ backgroundColor: 'var(--dejabrew-gold)' }}
                              title="Send Email"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </a>
                            <a
                              href={`tel:${reservation.phone}`}
                              className="inline-flex items-center px-2 py-1 border text-xs font-medium rounded transition-colors duration-200 text-white"
                              style={{ borderColor: 'var(--dejabrew-gold)' }}
                              title="Call"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
