import React, { useState, useEffect } from 'react';
import { Mail, MessageSquarePlus, Clock } from 'lucide-react';

interface Ticket {
  id: string;
  subject: string;
  desc: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Awaiting Review' | 'In Progress' | 'Resolved';
  createdAt: string;
}

export const TicketForm: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Load tickets from local storage
  useEffect(() => {
    const saved = localStorage.getItem('support_tickets');
    if (saved) {
      try {
        setTickets(JSON.parse(saved));
      } catch {
        setTickets([]);
      }
    }
  }, []);

  // Save tickets to local storage
  const saveTickets = (updated: Ticket[]) => {
    setTickets(updated);
    localStorage.setItem('support_tickets', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !desc.trim()) return;

    const newTicket: Ticket = {
      id: `NOLA-${Math.floor(100000 + Math.random() * 900000)}`,
      subject: subject.trim(),
      desc: desc.trim(),
      priority,
      status: 'Awaiting Review',
      createdAt: new Date().toLocaleString()
    };

    const updated = [newTicket, ...tickets];
    saveTickets(updated);

    // Reset Form
    setSubject('');
    setDesc('');
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const deleteTicket = (id: string) => {
    const updated = tickets.filter((t) => t.id !== id);
    saveTickets(updated);
  };

  return (
    <div className="space-y-10 my-8">
      {/* Create Ticket Card */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <MessageSquarePlus className="h-5 w-5 text-brand-primary dark:text-brand-secondary" />
          Create Support Ticket
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Ticket Subject
            </label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Credit balance did not update after request"
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary placeholder-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Priority Level
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary"
              >
                <option value="Low">Low (General Question)</option>
                <option value="Medium">Medium (Setup Issue)</option>
                <option value="High">High (Sending Blocked)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Official Support Email
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400">
                <Mail className="h-4 w-4" />
                <span>support@nolasmspro.com</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Detailed Description
            </label>
            <textarea
              required
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Include what you clicked, what happened, the HighLevel location name, recipient number, send time, message status, and any visible error."
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary placeholder-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold bg-brand-primary text-white dark:bg-brand-secondary dark:text-brand-navy rounded-xl hover:opacity-90 active:scale-98 transition-all uppercase tracking-wider"
          >
            Submit Ticket
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-3 rounded-xl border border-emerald-250 bg-emerald-50/50 dark:border-emerald-900/35 dark:bg-emerald-950/20 text-xs font-bold text-emerald-850 dark:text-slate-200 transition-all duration-200">
            Ticket submitted successfully. The support team will review your request shortly.
          </div>
        )}
      </div>

      {/* Ticket History List */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-200">
        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
          Submitted Support Tickets ({tickets.length})
        </h3>

        {tickets.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
            <Clock className="h-8 w-8 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
            <p className="text-xs text-slate-400 dark:text-slate-500">No active support tickets created in this session.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tickets.map((t) => (
              <div 
                key={t.id} 
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-400 dark:text-slate-500">{t.id}</span>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-105">{t.subject}</h4>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    {/* Priority Badge */}
                    <span className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-md border ${
                      t.priority === 'High' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30' :
                      t.priority === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' :
                      'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:border-slate-800/50'
                    }`}>
                      {t.priority}
                    </span>
                    {/* Status Badge */}
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded-md bg-blue-50/50 text-blue-650 border border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30">
                      {t.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed break-words whitespace-pre-wrap">
                  {t.desc}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> Opened on {t.createdAt}
                  </span>
                  <button
                    onClick={() => deleteTicket(t.id)}
                    className="text-red-500 hover:text-red-700 hover:underline transition-colors"
                  >
                    Delete Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
