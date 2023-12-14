export default function Tags() {
  const tagList = ["서울", "부산", "제주", "대전", "경주","서울", "부산", "제주", "대전", "경주"]; // 여기에 표시할 태그 목록을 추가

  return (
    <>
      {/* 태그 */}
      <div className="mt-16">
        <ul className="flex flex-wrap items-center align-middle">
          {tagList.map((tag, index) => (
            <li key={index} className="w-16 h-8 bg-gray-300 rounded-2xl flex items-center justify-center p-1 m-1" >
              <p className="text-center">{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}