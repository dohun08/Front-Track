import './CompoExtract.css';

function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

export default function Profile(props) {

    return (
        <section className="profile">
            <h2>{props.name}</h2>
            <img
                className="avatar"
                src={getImageUrl(props.imageId)}
                alt={props.name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {props.profession}
                </li>
                <li>
                    <b>Awards: {props.awards.length} </b>
                    {props.awards.join(', ')}
                </li>
                <li>
                    <b>Discovered: </b>
                    {props.discovered}
                </li>
            </ul>
        </section>
    )
}