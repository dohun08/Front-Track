import './CompoExtract.css';
import Profile from "./profile.jsx";

export default function Gallery() {
    const userMock = [
        {id : 1, name : "Maria Skłodowska-Curie", imageId : "szV5sdG", profession : "physicist and chemist", awards : ['수상경력1', '수상경력2', "수상경력3", "수상경력4"], discovered : "polonium (chemical element)"},
        {id : 2, name : "Katsuko Saruhashi", imageId : "YfeOqp2", profession : "geochemist", awards : ['수상경력1', '수상경력2'], discovered : "a method for measuring carbon dioxide in seawater"}
    ]
    return (
        <div>
            <h1>Notable Scientists</h1>
            {userMock.map(item=>
                <Profile
                    key={item.id}
                    name={item.name}
                    imageId={item.imageId}
                    profession={item.profession}
                    awards={item.awards}
                    discovered={item.discovered}
                />)}
        </div>
    );
}
