"use client"; // This is a client component
import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '@/components/Modal';

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Header /> 
      <Feed />
      <Modal />
      <title>Instagram</title>
      <h1>This is an Instagram clone</h1>
    </div>
  )
}
