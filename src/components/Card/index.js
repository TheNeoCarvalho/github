import {useState} from 'react'

import {CardUser, CardImage, Image, User, Bio, Btn, Follow, ImgFollow, Ops} from './style'

function Card(props) {

    return (
     <CardUser className="animate__animated animate__bounceIn">
         <CardImage>
            <Image src={props.user.avatar_url} />
            <Follow>
                <ImgFollow src="http://pixsector.com/cache/94bed8d5/av3cbfdc7ee86dab9a41d.png" />
                {props.user.followers}
            </Follow>
         </CardImage>
         <User>{props.user.login}</User>
         <Bio>{props.user.bio ? props.user.bio : <Ops>Ops... Não informou a bio</Ops>}</Bio>
         <Btn href={props.user.html_url} target="_blank">Github</Btn>
     </CardUser>
    );
  }
  
  export default Card;
  