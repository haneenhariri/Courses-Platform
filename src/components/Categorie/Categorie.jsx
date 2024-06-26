import "./Categorie.css"
const text_ma = {
    1: {
        imageUrl: './public/image/BlogImg/blog images/article 1.png',
        title: '10 updated Figma features in 2022',
        job: '# UX/UI Design',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
        read:'3 min read',
        datee:'April 12, 2022'
    },
    2: {
        imageUrl: './public/image/BlogImg/blog images/article 2.png',
        title: 'What new programming languages are in demand now?',
        job: '# Programming ',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
        read:'5 min read',
        datee:'March 25, 2022'
    },
    3: {
        imageUrl: './public/image/BlogImg/blog images/article 3.png',
        title: 'Top popular styles in illustration 2022',
        job: '# Illustration',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
        read:'7 min read',
        datee:'March 18, 2022'
    },
    4: {
        imageUrl: './public/image/BlogImg/blog images/article 4.png',
        title: 'The secret of a successful frame. What rules should be followed?',
        job: '# Photo & Film',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
        read:'6 min read',
        datee:'March 17, 2022'
    },
    5: {
        imageUrl: './public/image/BlogImg/blog images/article 5.png',
        title: 'Brainstorming in design: from the idea to its implementation',
        job: '# UX/UI Design',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi...',
        read:'12 min read',
        datee:'March 12, 2022'
    },
    6: {
        imageUrl: './public/image/BlogImg/blog images/article 6.png',
        title: 'Who is an Internet marketer and what does he do?',
        job: '# Marketing',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga...',
        read:'5 min read',
        datee:'February 2, 2022'
    }
    };
export default function Categorie() {
    return (
    <section className="categorie-mj">
        {Object.entries(text_ma).map(([id, text_ma]) => (
            <div className="card-mj" key={id}>
                <img className="img-mj" src={text_ma.imageUrl} alt={text_ma.title} />
                <div className="ddd-mj">
                    <h3 className="h3-mj">{text_ma.title}</h3>
                    <p id="p1-mj">{text_ma.job}</p>
                    <p id="p2-mj">{text_ma.description}</p>
                    <span className="mj-span"><p id="eng-mj-p"><img id="clock" src="./public/image/BlogImg/blog images/Icon clock.png" alt="clock" />{text_ma.read}</p><p>{text_ma.datee}</p></span>
                </div>
            </div>
        ))}
    </section>
    );
}