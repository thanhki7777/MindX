import React from "react";
import styles from "./styles.css";
import { useEffect } from "react";

var detail = 'https://637a8161702b9830b9ef7f65.mockapi.io/shoes'



function Products() {
  useEffect(() => {
    fetch(detail).then(reponse => reponse.json()).catch(console.error('Unable content'))
  })
  return (
    <div className="container">
      
      <div className="product-container">
        <div className="product-image-area">
          <span className="product-image">
            <a
              className=""
              href="#"
              title="Giày Bóng Đá TQ Nike Mercurial Vapor 15 Academy Hồng V2 TF"
            >
              <img
                src={detail.images}
                alt="Giày Bóng Đá TQ Nike Mercurial Vapor 15 Academy Hồng V2 TF"
              ></img>
            </a>
          </span>
        </div>
        <div className="info">
          <div className="info-inner">
            <div className="item-id">
              Mã sỉ lẻ: <span id="display">9836623</span>
            </div>
          </div>
          <div className="item-price">
            <div className="price-box">
              <span>{detail.price}<span style={{color:'red'}}>đ</span></span>
            </div>
          </div>
          <div className="item-avai">
            <div className="avai-tag">Hàng có sẵn</div>
          </div>
          <div className="item-size"></div>
          <div className="item-detail">
            <a
              title="Giày Bóng Đá Nike Mercurial Vic 6 Nõn Chuối Đen  Lưỡi Gà Liền TF"
              href="/giay-bong-da-nike-mercurial-vic-6-non-chuoi-den-luoi-ga-lien-tf"
            >
              <h3>
                {detail.description}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
