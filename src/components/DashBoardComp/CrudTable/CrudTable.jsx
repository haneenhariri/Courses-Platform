import React from 'react'
import "./CrudTable.css";  
import { Link } from "react-router-dom"

export default function CrudTable({ titleTable, th1, th2 ,th3,th4}) {

    return (
      <section className='OE_Dashboard'>
          <div className='OE_Search_Notification'>
              
          <div className="OE_search_bar">
          <img className='OE_img_search' src="./image/DashBoard\TableDash\Search.svg" />

            <input type="text" className="OE_search_input" placeholder="Search... "/>       
     </div>
      
 <img className='OE_img_notification' src="./image/DashBoard\TableDash\notifications.svg" />

          </div>

          <div className='OE_Title'>
              <p>{titleTable} </p>
              <button className='OE_dashboard_btn'>ADD NEW Article</button>
          </div>
        
          <table className='OE_Table'>
          <thead className='OE_Thead'>
            <tr>
                <th >{th1}</th>
                <th>{th2}</th>
                <th>{th3}</th>
                <th>{th4}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr className='OE_tbody_tr'>
                <td>10 updated Figma features in 2022</td>
                <td>Illustration</td>
                <td>Ugit, sed quia consequuntur magni ....</td>
                <td>08-Dec, 2021</td>
                        <td className='OE_images'>
                        <Link to={'/DashArticle/show/:id'}>
                                <img className='OE_img_view' src="./image/DashBoard\TableDash\View.svg" />
                                </Link>
                                <Link to={'DashArticle/edit/:id'}>      <img className='OE_img_edit' src="./image/DashBoard\TableDash\Edit.svg" /></Link>
                                <Link to={'/dash'}>   <img className='OE_img_delete' src="./image/DashBoard\TableDash\Delete.svg" /></Link>
                      </td>
                      
                    </tr>
                    
                    <tr className='OE_tbody_tr'>
                <td>10 updated Figma features in 2022</td>
                <td>Illustration</td>
                <td>Ugit, sed quia consequuntur magni ....</td>
                <td>08-Dec, 2021</td>
                        <td className='OE_images'>
                        <Link to={'/DashArticle/show/:id'}>
                                <img className='OE_img_view' src="./image/DashBoard\TableDash\View.svg" />
                                </Link>
                                <Link to={'DashArticle/edit/:id'}>      <img className='OE_img_edit' src="./image/DashBoard\TableDash\Edit.svg" /></Link>
                                <Link to={'/dash'}>   <img className='OE_img_delete' src="./image/DashBoard\TableDash\Delete.svg" /></Link>
                      </td>
                      
                    </tr>
                    
                    <tr className='OE_tbody_tr'>
                <td>10 updated Figma features in 2022</td>
                <td>Illustration</td>
                <td>Ugit, sed quia consequuntur magni ....</td>
                <td>08-Dec, 2021</td>
                        <td className='OE_images'>
                        <Link to={'/DashArticle/show/:id'}>
                                <img className='OE_img_view' src="./image/DashBoard\TableDash\View.svg" />
                                </Link>
                                <Link to={'DashArticle/edit/:id'}>      <img className='OE_img_edit' src="./image/DashBoard\TableDash\Edit.svg" /></Link>
                                <Link to={'/dash'}>   <img className='OE_img_delete' src="./image/DashBoard\TableDash\Delete.svg" /></Link>
                      </td>
                      
                    </tr>
                    
                    <tr className='OE_tbody_tr'>
                <td>10 updated Figma features in 2022</td>
                <td>Illustration</td>
                <td>Ugit, sed quia consequuntur magni ....</td>
                <td>08-Dec, 2021</td>
                        <td className='OE_images'>
                        <Link to={'/DashArticle/show/:id'}>
                                <img className='OE_img_view' src="./image/DashBoard\TableDash\View.svg" />
                                </Link>
                                <Link to={'DashArticle/edit/:id'}>      <img className='OE_img_edit' src="./image/DashBoard\TableDash\Edit.svg" /></Link>
                                <Link to={'/dash'}>   <img className='OE_img_delete' src="./image/DashBoard\TableDash\Delete.svg" /></Link>
                      </td>
                      
            </tr>
        </tbody>
    </table>
    </section>
  
  )
}