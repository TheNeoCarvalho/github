import {CardUser, CardImage, CardInfo, Username, Bio} from './style'

function Card(props) {

    return (
     <CardUser>
         <CardImage>
             <img src={props.user.avatar_url} alt={props.user.login}/>
             <h1>Follow: {props.user.followers}</h1>
         </CardImage>
         <CardInfo>
            <Username>{props.user.login}</Username>
            <Bio>{props.user.bio}
            </Bio>
            <a href={props.user.html_url} target="_blank">Github</a>
         </CardInfo>
     </CardUser>
    );
  }
  
  export default Card;
  