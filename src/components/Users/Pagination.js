import React, {useState} from 'react';

let Pagination = (props) => {
  const {pageSize, totalItemsCount, currentPage, onPageChanged, portionSize = 10} = props;

  const carrentPage = 'carrent-page';

  let pageCount = Math.ceil(totalItemsCount / pageSize),
    pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let pointCount = Math.ceil(pageCount / portionSize);
  let [pointNumber, setPointNumber] = useState(1);
  let leftPortionNumber = (pointNumber - 1) * portionSize +1;
  let rightPortionNumber = pointNumber * portionSize;

  return (
    <ul className="pagination">
      {pointNumber > 1 &&
      <button onClick={() => {setPointNumber(pointNumber - 1)}}>Попередня</button>}

      {pages
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p, i) => {
        return <li key={i} className={currentPage === p && carrentPage}
                   onClick={() => {
                     onPageChanged(p);
                   }}>{p}</li>;
      })}

      {pointCount > pointNumber &&
      <button onClick={() => {setPointNumber(pointNumber + 1)}}>Наступна</button>}
    </ul>
  );
};
export default Pagination;
