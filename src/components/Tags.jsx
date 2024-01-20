import React, { useState, useEffect } from "react";

export default function Tags() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://whatshot.pintor.dev/api/categories?parentId=-1");
        const data = await response.json();
        setCategories(data.data.list);
      } catch (error) {
        console.error("에러입니다. : ", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="mt-16 mb-5">
        <ul className="grid grid-cols-6 gap-2 text-sm">
          {categories.map((category) => (
            <li key={category.id} className="h-8 bg-gray-200 rounded-2xl flex items-center justify-center">
              <p className="opacity-70">{category.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}