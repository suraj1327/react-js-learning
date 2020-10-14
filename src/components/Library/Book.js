
import React from 'react';
export const Book = ({ title="No title", author="No author", pages=0, freeBookmark=false}) => {
    return (
      <section>
        
        <div><p>Book Title: {title}</p>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p>freeBookmark: {freeBookmark ? 'yes':'no'}</p></div>
      </section>
    )
  }