import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import React from 'react';

const NotFound = () => {
  return (
    <div>

      <main style={{textAlign: "center", marginTop: "25%"}}>
        <p style={{ fontSize: "1.9rem", fontWeight: "bold" }}>Sorry,</p>

        <p style={{ fontSize: "1.5rem", fontWeight: "500", marginTop: "1rem" }}>
          we could not find the page you were looKing for 
        </p>
      </main>


    </div>
  );
}

export default NotFound;