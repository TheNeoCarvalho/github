import { CardUser, Info } from './style'
function Card(props) {
    return(
        <CardUser>
            <Info>
            <img width="250" src={props.user.avatar_url} alt={props.user.login}/>
            <p>Folowers: {props.user.followers}</p>
                <h1>{props.user.name}</h1>
                <h3>{props.user.login}</h3>
                <p>{props.user.bio ? props.user.bio : <p>...</p>}</p>
                <a href={props.user.html_url} target="_blank">Github</a>
            </Info>
        </CardUser>
    )
}

export default Card