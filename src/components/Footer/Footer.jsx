import './Footer.css'

export default function FOOTER(){
    const lists = [
        { title: 'Courses', listItems: ['Animation', 'Design', 'Illustration', 'Programming', 'Photo & film','Marketing'] },
        { title: 'Teachers', listItems: ['All teachers', 'Become a teacher'] },
        { title: 'Information', listItems: [
            { URL: './../../pages/Blog', text: 'Blog' },
            { URL: '#', text: 'About Us' },
            { URL: './../../components/FAQ', text: 'FAQ' },
          ]},
        { title: 'En', listItems: ['English', 'french', 'Ressian'] }
      ];
      
    return(
        <>
        <div className="AM-footer "  >
            <div className='footer1'>
                <div className='update'>
                    <div className='title'>
                        <img src="./image/FooterImg/logo-2.svg" className='logo'alt="logo" />
                        <p className='p1'>Update</p>
                    </div>
                    <a href="#" className='size a'>support@update.com</a>
                    <span className='size'>+1 (213) 677 10 24</span>
                    <div className='icon'>
                       <a href="#"><img src="./image/FooterImg/Facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="./image/FooterImg/Youtube.png" alt="youtube" /></a>
                        <a href="#"><img src="./image/FooterImg/Twitter.png" alt="twitter" /></a>
                    </div>



                </div>
                {lists.map((list) => (
                    <div key={list.title}>
                        <p className="space">{list.title}</p>
                        <ul>
                            {list.listItems.map((listItem) => (
                            <li key={listItem}>
                                {typeof listItem === 'object' ? (
                                <a href={listItem.URL}>{listItem.text}</a>
                                ) : (
                                <li>{listItem}</li>
                                )}
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}   
            </div>
            <div className='footer2'>
                <p >Policy privacy</p>
                <p>Copyright 2022. All rights reserved</p>
            </div>
        </div>

        </>




    )
}
