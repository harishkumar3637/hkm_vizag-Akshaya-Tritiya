'use client';

import { useState } from 'react';
import { Copy, Info } from 'lucide-react';

export function DonationForm() {
  const [activeTab, setActiveTab] = useState('indian');
  const [formData, setFormData] = useState({
    seva: '',
    amount: '',
    fullName: '',
    whatsapp: '',
    pincode: '',
    sankalp: false,
  });
  const [copied, setCopied] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section className="py-16 px-4 bg-[linear-gradient(180deg,#fffaf2_0%,#fff3df_42%,#fff8ef_100%)]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#8b3a1f] mb-8">
          Offer your Seva and receive the blessings of Sri Radha Krishna
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveTab('indian')}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-colors ${
              activeTab === 'indian'
                ? 'bg-[#8b3a1f] text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300'
            }`}
          >
            Indian Currency
          </button>
          <button
            onClick={() => setActiveTab('non-indian')}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-colors ${
              activeTab === 'non-indian'
                ? 'bg-[#8b3a1f] text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300'
            }`}
          >
            Non-Indian Currency
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              {/* Seva Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Select Seva
                </label>
                <select
                  value={formData.seva}
                  onChange={(e) => setFormData({ ...formData, seva: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b3a1f]"
                >
                  <option value="">Choose a Seva</option>
                  <option value="akshaya-tritiya">Akshaya Tritiya Seva</option>
                  <option value="gau-seva">Gau Seva</option>
                  <option value="mandir">Mandir Nirman Seva</option>
                  <option value="annadana">Annadana Seva</option>
                </select>
              </div>

              {/* Amount */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
                  Amount
                  <Info className="w-4 h-4 text-gray-500" />
                </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b3a1f]"
                />
              </div>

              {/* Yellow Information Box */}
              <div className="bg-[#fde9bf] rounded-lg p-6 mb-6">
                {/* Full Name */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b3a1f]"
                  />
                </div>

                {/* WhatsApp */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      WhatsApp Number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 px-3 bg-white rounded-lg border-2 border-gray-300">
                        <span className="text-lg">🇮🇳</span>
                        <span className="text-gray-700">+91</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="+91"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="flex-1 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b3a1f]"
                      />
                    </div>
                  </div>
                </div>

                {/* Pincode */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="City Pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b3a1f]"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="sankalp"
                    checked={formData.sankalp}
                    onChange={(e) => setFormData({ ...formData, sankalp: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#8b3a1f]"
                  />
                  <label htmlFor="sankalp" className="text-sm text-gray-700">
                    I would like to receive Sankalp and Aarti video on my birthday.
                  </label>
                </div>

                {/* Donate Button */}
                <button className="w-full py-3 bg-[#8b3a1f] text-white font-bold rounded-lg hover:bg-[#6b2a15] transition-colors">
                  Donate
                </button>
              </div>
            </div>

            {/* Right Column - Payment Info */}
            <div className="bg-[#fde9bf] rounded-lg p-6">
              <div className="space-y-6">
                {/* UPI Section */}
                <div>
                  <h3 className="font-bold text-[#8b3a1f] mb-4">For UPI & QR</h3>
                  <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center h-40">
                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded">
                      <img
                        src="https://images.unsplash.com/photo-1633356138461-d6f4f8a0c3c5?auto=format&fit=crop&w=200&q=80"
                        alt="QR Code"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Transfer Section */}
                <div>
                  <h3 className="font-bold text-[#8b3a1f] mb-4 flex items-center gap-2">
                    For Bank Transfer
                    <Copy className="w-4 h-4" />
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Account Name: <span className="font-bold text-[#8b3a1f]">Hare Krishna Movement Jaipur</span>
                      </span>
                      <button
                        onClick={() => handleCopy('Hare Krishna Movement Jaipur', 'account')}
                        className="text-gray-500 hover:text-[#8b3a1f]"
                      >
                        {copied === 'account' ? '✓' : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Account Number: <span className="font-bold text-[#8b3a1f]">677501700696</span>
                      </span>
                      <button
                        onClick={() => handleCopy('677501700696', 'account-num')}
                        className="text-gray-500 hover:text-[#8b3a1f]"
                      >
                        {copied === 'account-num' ? '✓' : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Bank Name: <span className="font-bold text-[#8b3a1f]">ICICI Bank</span>
                      </span>
                      <button
                        onClick={() => handleCopy('ICICI Bank', 'bank')}
                        className="text-gray-500 hover:text-[#8b3a1f]"
                      >
                        {copied === 'bank' ? '✓' : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        IFSC Code: <span className="font-bold text-[#8b3a1f]">ICIC0007299</span>
                      </span>
                      <button
                        onClick={() => handleCopy('ICIC0007299', 'ifsc')}
                        className="text-gray-500 hover:text-[#8b3a1f]"
                      >
                        {copied === 'ifsc' ? '✓' : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Email: <span className="font-bold text-[#8b3a1f]">daan.augp@eubank</span>
                      </span>
                      <button
                        onClick={() => handleCopy('daan.augp@eubank', 'email')}
                        className="text-gray-500 hover:text-[#8b3a1f]"
                      >
                        {copied === 'email' ? '✓' : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <p className="text-xs text-center text-gray-700 italic">
                  (Kindly send us a screenshot for your seva entry)
                </p>

                {/* Terms */}
                <p className="text-xs text-center text-gray-800">
                  <span className="font-bold">By proceeding, you are agreeing to our</span>{' '}
                  <a href="#" className="text-[#8b3a1f] font-bold hover:underline">
                    Terms & Conditions
                  </a>
                  {' '}&{' '}
                  <a href="#" className="text-[#8b3a1f] font-bold hover:underline">
                    Privacy Policy
                  </a>
                </p>

                {/* Support Section */}
                <div className="border-t border-gray-300 pt-4">
                  <h4 className="font-bold text-[#8b3a1f] mb-3">Support</h4>
                  <p className="text-xs text-gray-700 mb-3">For more information please contact:</p>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span>📱</span>
                    <a href="tel:919966007166" className="text-[#8b3a1f] font-semibold hover:underline">
                      9196600716666
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <span>✉️</span>
                    <a href="mailto:dmt@hkmjaipur.org" className="text-[#8b3a1f] font-semibold hover:underline">
                      dmt@hkmjaipur.org
                    </a>
                  </div>

                  {/* Payment Methods */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">Assured</span>
                    <span className="text-xs">🏦 Payment Methods Accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
