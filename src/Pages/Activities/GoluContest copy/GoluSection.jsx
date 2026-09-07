import React from 'react'

export default function GoluSection({ contestSettings }) {
  return (
    <main className="max-w-4xl mx-auto mt-8 px-4 space-y-10">
      {/* Contest Rules */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <span>📜</span> Contest Rules & Photo Requirements
        </h3>
        <ul className="grid sm:grid-cols-3 gap-4 text-sm text-stone-600 pt-2">
          <li className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
            <strong className="block text-stone-900 mb-1">🖼️ Golu Photos</strong>
            Upload {contestSettings.goluMinImages} to {contestSettings.goluMaxImages} clear pictures of your main Golu display.
          </li>
          <li className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
            <strong className="block text-stone-900 mb-1">🏙️ Super Chennai Corner</strong>
            Upload {contestSettings.superChennaiMinImages} to {contestSettings.superChennaiMaxImages} photos showing your unique Chennai theme.
          </li>
          <li className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
            <strong className="block text-stone-900 mb-1">📱 Mobile Verification</strong>
            OTP verification is mandatory for all participants.
          </li>
        </ul>
      </div>

      {/* Categories & Prizes */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-stone-900">🎁 Contest Categories & Prizes</h3>
          <p className="text-sm text-stone-500 mt-1">Showcase your creativity and win exciting recognition</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-2xl mx-auto">🏆</div>
            <h4 className="font-bold text-stone-900">Best Traditional Golu</h4>
            <p className="text-xs text-stone-500 leading-relaxed">Honoring authentic multi-tier doll arrangements, traditional themes, and cultural elegance.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-stone-200 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-purple-100 text-[#8B3C82] rounded-2xl flex items-center justify-center text-2xl mx-auto">🏙️</div>
            <h4 className="font-bold text-stone-900">Super Chennai Theme</h4>
            <p className="text-xs text-stone-500 leading-relaxed">Special awards for displays capturing Chennai heritage, landmarks, and city culture.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-stone-200 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-pink-100 text-pink-700 rounded-2xl flex items-center justify-center text-2xl mx-auto">💡</div>
            <h4 className="font-bold text-stone-900">Most Creative Corner</h4>
            <p className="text-xs text-stone-500 leading-relaxed">Recognizing innovative hand-crafted models, eco-friendly concepts, and artistic detailing.</p>
          </div>
        </div>
      </div>
    </main>
  )
}