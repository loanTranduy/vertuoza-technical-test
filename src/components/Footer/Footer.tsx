import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-0">
      <div className="mx-6 md:mx-0">
        <div className="py-9">
          <p className="text-neutral-500 gap-2">
            made with 💛️ by
            <a
              target="_blank"
              href="https://www.loantranduy.com/"
              className="text-blue-600 flex items-center rt-r-weight-bold text-lg hover:underline"
            >
              loan tran duy
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
