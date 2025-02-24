"use client"

import React from 'react';

export default function SectionTitle({ title, text }) {
    return (
        <div className="text-center my-12 relative">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">{text}</p>
        </div>
      );
}