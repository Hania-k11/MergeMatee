import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About MergeMate</h3>
            <p className="text-sm text-muted-foreground max-w-xs md:max-w-sm">
              MergeMate connects open-source contributors and project owners seamlessly. Discover, collaborate, and grow your projects with ease.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
          </div>

          {/* Contact and Legal Links */}
          <div className="text-center md:text-right">
            <div className="text-sm mb-4">
              <a href="/contact" className="hover:underline mr-6">
                Contact Us
              </a>
              <a href="/privacy" className="hover:underline mr-6">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>© 2024 MergeMate. All Rights Reserved.</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        {/* <div className="bg-zinc-700 py-8 px-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center">Stay Updated</h3>
          <p className="text-sm mb-4 text-center max-w-md mx-auto">
            Subscribe to our newsletter and get the latest updates and news about open-source projects, contributor opportunities, and more.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="px-6 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
