'use client';

import Image from 'next/image'
import './globals.css'
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import AuthProvider from '@/app/AuthProvider';
import ThemeProvider, { ThemeContext } from './contexts/Theme/Theme.context';



export default function App() {
  return (
    <ThemeProvider >
      <AuthProvider />

    </ThemeProvider>
  )
}
