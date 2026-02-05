import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Icekettle Jeweller. All rights reserved.</p>
          <p className="mt-2">Powered by Presentech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
