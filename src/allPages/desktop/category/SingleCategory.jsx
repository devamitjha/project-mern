import React from 'react';
import { useParams } from 'react-router';

const SingleCategory = () => {
    const { categories, catname } = useParams();
    const { tags, tag } = useParams();
  return (
    <div>
      single category
    </div>
  )
}

export default SingleCategory
