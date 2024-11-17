import React from 'react';
import { Smartphone } from 'lucide-react';

const MobileWarning = () => {
  return (
    <div className="sm:hidden flex items-center justify-center mt-20">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Smartphone className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sorry</h1>
        <p className="text-xl text-gray-600 mb-6">
          This app is not available on smaller devices
        </p>
        <div className="text-sm text-gray-500">
          Please visit us on a larger screen for the best experience
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;
