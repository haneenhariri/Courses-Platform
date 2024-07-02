import { Link } from "react-router-dom"
import Search from '../../../img/DashBoard/TableDash/Search.svg'
import notification from '../../../img/DashBoard/TableDash/notifications.svg'
import View from '../../../img/DashBoard/TableDash/View.svg'
import Edit from '../../../img/DashBoard/TableDash/Edit.svg'
import Delete from '../../../img/DashBoard/TableDash/Vector.svg'
import "./CrudTable.css"

export default function CrudTable({ titleTable, th1, th2 ,th3,th4 , btnContent , Data , AddURL}) {

    return (
      <section className="FM-Dash-Header">
        <div className='OE_Dashboard'>
          
          <div className='OE_Search_Notification'>
    
            <div className="OE_search_bar">
              <img className='OE_img_search' src={Search} />
              <input type="text" className="OE_search_input" placeholder="Search... " />
            </div>
    
            <img className='OE_img_notification' src={notification} />
    
          </div>
    
          <div className='OE_Title'>
            <p>{titleTable}</p>
            <Link to={AddURL} className='OE_dashboard_btn'>ADD NEW {btnContent}</Link>
          </div>

          <div className='OE_Table_Parent'>
            <table className='OE_Table'>
              <thead className='OE_Thead'>
                <tr>
                  <th >{th1}</th>
                  <th >{th2}</th>
                  <th >{th3}</th>
                  <th >{th4}</th>
                  <th ></th>
                </tr>
              </thead>
              <tbody className='OE_Tbody'>
                {Data.map(e => {
                  return (
                    <tr key={e.id} className='OE_tbody_tr'>
                      <td>{e.td1}</td>
                      <td>{e.td2}</td>
                      <td>{e.td3}</td>
                      <td>{e.td4}</td>
                      <td className='OE_images'>
                        <Link to={e.ViewURL}><img className='OE_img_view' src={View} /></Link>
                        <Link to={e.editURL}><img className='OE_img_edit' src={Edit} /></Link>
                        <Link to={e.delete}>   <img className='OE_img_delete' src={Delete} /></Link>
                      </td>
                    </tr>
                  )
                })}
                
      
                
              </tbody>
            </table>
          </div>
     
        </div>
      </section>
      
  )
}
