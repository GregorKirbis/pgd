"use client"

import React, { useState, useEffect } from 'react';

export default function ScrollTop() {
    const [visible, setVisible] = React.useState(false);
  
    React.useEffect(() => {
      const toggleVisibility = () => setVisible(window.scrollY > 100);
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    
    return (
      <button
        className={`fixed bottom-8 right-8 w-10 h-10 rounded bg-primary text-white flex items-center justify-center shadow-lg transition ${visible ? 'block' : 'hidden'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    );
}