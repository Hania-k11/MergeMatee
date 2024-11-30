import React from 'react';
import './index.css'; // Import your global styles

// You can pass additional props like metadata if needed
const RootLayout = ({ children }) => {
  return (
    <div>
      {/* Metadata can be handled via a head tag or dynamically in a single page */}
      <head>
        <meta name="description" content="Connect with meaningful projects and start making a difference in the open-source world." />
        <title>MergeMate - Find Your Next Open-Source Adventure</title>
      </head>

      {/* The children prop will contain the content of your app */}
      <div className="font-inter">{children}</div>
    </div>
  );
};

export default RootLayout;
