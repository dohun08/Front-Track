//Card 자식요소를 포함하는 컴포넌트를 정의해 보자.
import './children.css'

function Card({children, title}){

    return (
        <div className={'card'}>
            <div className={'card-content'}>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default function Profile() {
    return (
        <div>
            <Card title="Photo">
                <img
                className="avatar"
                src="https://i.imgur.com/OKS67lhm.jpg"
                alt="Aklilu Lemma"
                width={100}
                height={100}
                />
            </Card>
            <Card title="About">
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
            <Card title="Photo">
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={120}
                    height={120}
                />
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
}