import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyDocument from './MyDocument';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

function App() {
  return (
    <div>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
  );
}

export default App;
