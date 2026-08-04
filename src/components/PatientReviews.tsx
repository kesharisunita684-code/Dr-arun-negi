import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, CheckCircle2, ExternalLink, Filter, Sparkles, User } from 'lucide-react';
import { TESTIMONIALS, HOSPITAL_INFO } from '../data/hospitalData';

export const PatientReviews: React.FC = () => {
  const [filter, setFilter] = useState<number | 'all'>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);

  // New review form state
  const [newReviewerName, setNewReviewerName] = useState('');
  const [newTreatment, setNewTreatment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const displayedReviews = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((r) => r.rating === filter);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedReview(false);
      setNewReviewerName('');
      setNewTreatment('');
      setNewComment('');
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white relative font-sans overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> Patient Feedback & Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trusted by Over 1,285+ Patients in Kotdwar
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real stories and genuine feedback from patients treated at Dr. Arun Negi's Hospital.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
          {/* Rating Big Number */}
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <div className="text-5xl font-extrabold text-amber-400 tracking-tight">5.0 / 5</div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-slate-700 hidden sm:block" />
            <div className="space-y-1 text-slate-300 text-sm">
              <div className="font-bold text-white text-lg">1,285+ Google Reviews</div>
              <div className="text-xs text-teal-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified Google Rating
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowReviewModal(true)}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition-all shadow-md text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Write a Patient Review</span>
            </button>

            <a
              href="https://maps.google.com/?q=Jhanda+Chowk,+Kotdwar,+Uttarakhand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700/80 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl border border-slate-600 transition-all text-xs sm:text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-teal-400" />
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 shadow-lg flex flex-col justify-between space-y-4 hover:border-teal-500/50 transition-all duration-300 group"
            >
              <div className="space-y-3">
                {/* Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${rev.avatarBg || 'bg-blue-600'} flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-inner`}>
                  {rev.author.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-bold text-white truncate">{rev.author}</div>
                  <div className="text-[11px] text-teal-400 truncate">{rev.treatment}</div>
                  <div className="text-[10px] text-slate-400 truncate">{rev.location}</div>
                </div>
                <div className="ml-auto shrink-0 bg-teal-500/10 text-teal-300 p-1 rounded-full" title="Verified Patient">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-700">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
            >
              ✕
            </button>

            <div>
              <h3 className="text-2xl font-bold text-white">Share Your Patient Experience</h3>
              <p className="text-xs text-slate-400 mt-1">
                Your feedback helps other families in Kotdwar find trusted healthcare at Dr. Arun Negi's Hospital.
              </p>
            </div>

            {submittedReview ? (
              <div className="p-6 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-center space-y-2">
                <Sparkles className="w-8 h-8 text-teal-400 mx-auto animate-bounce" />
                <div className="text-lg font-bold text-white">Thank You for Your Review!</div>
                <p className="text-xs text-teal-200">
                  Your feedback has been recorded and submitted for display on our Google rating profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-slate-200 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={newReviewerName}
                    onChange={(e) => setNewReviewerName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Treatment / Doctor Service Received</label>
                  <input
                    type="text"
                    required
                    value={newTreatment}
                    onChange={(e) => setNewTreatment(e.target.value)}
                    placeholder="e.g. Physician Consultation / Emergency"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Your Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setNewRating(num)}
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                          num <= newRating ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-slate-800 border-slate-700 text-slate-500'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">Your Review Message</label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Describe your consultation or treatment experience with Dr. Arun Negi and staff..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2.5 rounded-xl font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
