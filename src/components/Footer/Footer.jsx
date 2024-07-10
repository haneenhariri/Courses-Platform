import { Link } from 'react-router-dom';
import './Footer.css'

export default function FOOTER(){
    const lists = [
        { title: 'Courses', listItems: ['Animation', 'Design', 'Illustration', 'Programming', 'Photo & film','Marketing'] },
        { title: 'Teachers', listItems: ['All teachers', 'Become a teacher'] },
        { title: 'Information', listItems: [
            { URL: '/Blog', text: 'Blog' },
            { URL: '#', text: 'About Us' },
            { URL: 'components/FAQ', text: 'FAQ' },
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
                    <Link to={'#'} className='size a'>support@update.com</Link>
                    <span className='size'>+1 (213) 677 10 24</span>
                    <div className='icon'>
                       <Link to={'#'}><img src="./image/FooterImg/Facebook.png" alt="facebook" /></Link>
                        <Link to={'#'}><img src="./image/FooterImg/Youtube.png" alt="youtube" /></Link>
                        <Link to={'#'}><img src="./image/FooterImg/Twitter.png" alt="twitter" /></Link>
                    </div>



                </div>
                {lists.map((list) => (
                    <div key={list.title}>
                        <p className="space">{list.title}</p>
                        <ul>
                            {list.listItems.map((listItem) => (
                            <li key={listItem}>
                                {typeof listItem === 'object' ? (
                                <Link to={listItem.URL}>{listItem.text}</Link>
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
