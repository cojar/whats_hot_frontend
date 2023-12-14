import React from 'react'
import Place1 from '../assets/place1.png'
import Place2 from '../assets/place2.png'
import Place3 from '../assets/place3.png'

export default function PlaceItem({ title, content, tags, index }) {

  const placeCovers = [Place1,Place2,Place3];

  return (
    <div>
      <>
      {/*추천여행지*/}
      <li>
        <div className="flex w-full rounded-2xl bg-white border shadow-lg my-3">
          <div className="flex items-center justify-center m-2">
            <img
              className="flex w-20 h-25 object-cover"
              src={placeCovers[index-1]}
              alt=""
            />
          </div>
          <div className="w-full h-30 flex mx-2">
            <div>
              <div className="w-auto h-auto">
                <p className="font-bold my-2">{title}</p>
              </div>
              <div className="w-full overflow-hidden">
                <p className="text-sm my-2">{content}</p>
              </div>
              <div className="flex flex-wrap items-center align-middle my-2">
                {tags &&
                  tags.map((tag, i) => (
                    <div
                      key={i}
                      className="w-auto h-8 bg-blue-300 rounded-2xl mr-1 p-2 flex items-center justify-center "
                    >
                      <p className="text-xs">{tag}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
    </div>
  )
}
