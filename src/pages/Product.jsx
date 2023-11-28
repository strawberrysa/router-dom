import React from "react";
import { useParams } from "react-router-dom";

export default function Product({ items }) {
  //url에서 현재페이지의 id 가져오기
  const { id } = useParams();
  //items의 배열에서 id가 현재 url에서 가져온 id와 일치하는 상품을 찾아서 product 변수에 할당.
  const product = items.find((item) => item.id === id);

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* product객체(items의 배열에서 id가 현재 url에서 가져온 id와 일치하는 상품)를 이용해서 상품정보 렌더링 */}
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            <h2>{product.name}</h2>
          </div>
          <div>
            <h3>가격: {product.price}</h3>
            <h3>좋아요: {product.like}</h3>
            <h3>구매옵션</h3>
            {/* 상품의 옵션을 드롭다운 메뉴로 렌더링 */}
            <select
              style={{
                width: "100px",
              }}
            >
              {/* product의 option 배열을 사용하여 옵션을 렌더링.
               map 함수로 option 배열의 각 요소에 대해 반복하며 각각의 요소를 <option>요소로 만들기.
               key 속성은 map 함수에 넣어주라 .  */}
              {product.option.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
