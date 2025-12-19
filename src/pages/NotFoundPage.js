import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="font-heading text-4xl text-tg-blue-900">404 - Page Not Found</h1>
      <p className="font-body text-tg-gray-700 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
