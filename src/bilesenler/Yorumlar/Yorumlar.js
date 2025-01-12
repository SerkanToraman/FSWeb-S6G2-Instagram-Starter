import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;
  console.log("yorumlar",yorumlar)

  return (
    <div>
      {yorumlar.map((item)=>
      <div key={item.id}>
          <Yorum yorum={item}/>
      </div>
      )}
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
    </div>
  );
};

export default Yorumlar;
