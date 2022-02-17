import React, {useState} from 'react'
import { CardImg } from 'reactstrap';

function ThumbImage({img}) {
    const [imgError, setImgError] = useState(false);

    if (!imgError) {
        return (  
          <CardImg src={img} onError={() => setImgError(true)} top className="product-thumbnail" />
        )
      } else {
        return <CardImg src={require("../../assets/img/not-available.png")} top className="product-thumbnail" /> // with no onError
      }
}

export default ThumbImage