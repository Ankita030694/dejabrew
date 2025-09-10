'use client';

import { useState, useEffect } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

interface ContactData {
  id: string;
  email: string;
  fullName: string;
  notes: string;
  phone: string;
  timestamp: any;
}

export default function ContactUsData() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState<ContactData[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsQuery = query(
          collection(db, 'forms'),
          orderBy('timestamp', 'desc')
        );
        const contactsSnapshot = await getDocs(contactsQuery);
        const contactsData = contactsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ContactData[];

        setContacts(contactsData);
        setFilteredContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm) ||
      contact.notes.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchTerm, contacts]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--dejabrew-dark)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--dejabrew-gold)' }}></div>
          <p className="text-lg text-white">Loading contact inquiries...</p>
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
            Contact Us Inquiries
          </h1>
          <p className="text-lg text-white/80">
            Manage customer contact form submissions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg shadow-md p-6 border-l-4" style={{ backgroundColor: 'var(--dejabrew-dark-light)', borderLeftColor: 'var(--dejabrew-gold)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--dejabrew-gold)' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Total Inquiries</p>
                <p className="text-2xl font-bold text-white">{contacts.length}</p>
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
                <p className="text-sm font-medium text-white/70">This Week</p>
                <p className="text-2xl font-bold text-white">
                  {contacts.filter(contact => {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    const contactDate = contact.timestamp?.toDate ? contact.timestamp.toDate() : new Date(contact.timestamp);
                    return contactDate >= weekAgo;
                  }).length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md p-6 border-l-4" style={{ backgroundColor: 'var(--dejabrew-dark-light)', borderLeftColor: 'var(--dejabrew-gold)' }}>
            <div className="flex items-center">
              <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--dejabrew-gold)' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">With Notes</p>
                <p className="text-2xl font-bold text-white">
                  {contacts.filter(contact => contact.notes && contact.notes.trim().length > 0).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="rounded-lg shadow-md p-6 mb-6" style={{ backgroundColor: 'var(--dejabrew-dark-light)' }}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name, email, phone, or notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-transparent placeholder-white/50 text-white focus:outline-none focus:placeholder-white/70 focus:ring-1 focus:ring-2"
              style={{ borderColor: 'var(--dejabrew-gold)' }}
            />
          </div>
        </div>

        {/* Contact Table */}
        <div className="rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--dejabrew-dark-light)' }}>
          <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--dejabrew-gold)' }}>
            <h3 className="text-lg font-medium text-white">
              Contact Inquiries ({filteredContacts.length})
            </h3>
          </div>

          {filteredContacts.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-white">No contact inquiries</h3>
              <p className="mt-1 text-sm text-white/60">
                {searchTerm ? 'No inquiries match your search criteria.' : 'No contact inquiries have been submitted yet.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y" style={{ borderColor: 'var(--dejabrew-gold)' }}>
                <thead className="bg-black/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'var(--dejabrew-gold)' }}>
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-black/20 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-white">{contact.fullName}</div>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1" style={{ backgroundColor: 'var(--dejabrew-gold)', color: 'black' }}>
                              Contact
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white/80">{contact.email}</div>
                        <div className="text-sm text-white/60">{contact.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white/80 max-w-xs">
                          {contact.notes ? (
                            <div className="truncate" title={contact.notes}>
                              {contact.notes}
                            </div>
                          ) : (
                            <span className="text-white/40 italic">No message</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white/80">
                          {formatDate(contact.timestamp)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <a
                            href={`mailto:${contact.email}`}
                            className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-black transition-colors duration-200"
                            style={{ backgroundColor: 'var(--dejabrew-gold)' }}
                            title="Send Email"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                          <a
                            href={`tel:${contact.phone}`}
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
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
