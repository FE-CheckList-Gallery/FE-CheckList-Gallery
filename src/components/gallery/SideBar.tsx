import React, { useState, useEffect } from 'react';
import { ICategoryProps } from '../../types/interface';
import { postApi, categoryApi } from '../../lib/api';
import TagList from './TagList';
import Tags from './Tags';

export default function SideBar() {
  const [postCount, setPostCount] = useState(0);
  const [tags, setTags] = useState<ICategoryProps[]>([]);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      const { data } = await postApi.getAllPosts();
      setPostCount(data.length);
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await categoryApi.getAllCategory();
      setTags(data);
    } catch (err: any) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
    getCategories();
  }, []);

  return (
    <div className="SideBar" style={{ position: 'relative' }}>
      <TagList postCount={postCount} tags={tags} />
      <Tags postCount={postCount} tags={tags} />
    </div>
  );
}
