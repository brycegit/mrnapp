import React from 'react';

const ContestPreview = (contests) => {
  return (
    <div>
    <div>{contests.categoryName}</div>
    <div>{contests.contestName}</div>
    </div>
  );
};

// ContestPreview.propTypes = {
//   contests: React.PropTypes.json
// };

export default ContestPreview;
