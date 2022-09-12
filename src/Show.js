import React from "react";
import "./showCard.css";
export default function Show({ data }) {
  return (
    <>
      {console.log(data)}
      {data.map((d) => {
        return (
          <div className="container">
            <div className="card">
              <div className="card-image">
                <img src={d?.show?.image?.medium} />
              </div>
              <div className="card-title">
                <h3>{d?.show?.name}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
{
  /* <img src={d?.show?.image?.medium} /> */
}
