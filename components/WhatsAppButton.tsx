'use client';

import React from 'react';

export default function WhatsAppButton() {
  return (
    <div className="whatsapp">
      <a href="https://api.whatsapp.com/send?phone=919354600730" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <img src="/assets/images/contact/whatsapp.png" alt="WhatsApp" className="rr-whatsapp-icon" />
      </a>
    </div>
  );
}
