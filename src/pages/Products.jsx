import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Products({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams: searchParams.get("sort") });

  return (
    <>
      {/* Header */}
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순정렬
        </button>
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {items.map((item, index) => (
            //items 배열에서 순회하면서 itme과 index로 처리.
            <Link to={`/products/${index + 1}`} key={index}>
              {/* 각 상품을 보여주는 div */}
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                {/* 상품 이름과 가격표시 */}
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
