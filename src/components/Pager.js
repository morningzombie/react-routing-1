import React from 'react';

export default function Pager(count) {
  const pageArray = [];
  let cnt = count.count / 50;
  for (let i = 0; i < cnt - 2; i++) {
    pageArray.push(i);
  }
  return (
    <nav className="pager">
      {pageArray.map((page, index) => {
        const pg = index + 2;
        return <a href="view=users&idx=">{pg}</a>;
      })}
      #v
    </nav>
  );
}
