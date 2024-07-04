import { Link } from "react-router-dom";
import Search from '../../../img/DashBoard/TableDash/Search.svg';
import notification from '../../../img/DashBoard/TableDash/notifications.svg';
import View from '../../../img/DashBoard/TableDash/View.svg';
import Edit from '../../../img/DashBoard/TableDash/Edit.svg';
import Delete from '../../../img/DashBoard/TableDash/Vector.svg';
import "./CrudTable.css";
import { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import { debounce } from 'lodash';
import Swal from "sweetalert2";

export default function CrudTable({ titleTable, th1, th2, th3, th4, btnContent, Data, AddURL }) {
    const [search, setSearch] = useState('');
    /* for  change color row  */
    const [colorRows, setColorRows] = useState([]);
    /* for pop up  */
    const [notFound, setNotFound] = useState(false);
    /* close pop up and set table to start state  */
    const ClosePopup = () => {
        setNotFound(false);
        setSearch('');
        setColorRows([]);
        
    };
    /* start useEffect  */
    useEffect(() => {
        const debouncedSearch = debounce(() => {
            if (search === '') {
                setColorRows([]);
                setNotFound(false);
                return;
            }
        const matchingRows = Data.filter((e) =>
                e.td1.toLowerCase().includes(search.toLowerCase())).map(e => e.id);
                setColorRows(matchingRows);
            if (matchingRows.length === 0) {
                setNotFound(true);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No results found!",
                    willClose: ClosePopup,
                    confirmButtonColor:'#504DEE'
                });
            } 
            else {
                setNotFound(false);
                const timer = setTimeout(() => {
                    setColorRows([]);
                }, 4000); 
                return () => clearTimeout(timer); 
            }
        }, 500);
        debouncedSearch();
        return () => {
            debouncedSearch.cancel(); 
        };
    }, [search, Data]);
    /* end useEffect  */
    return (
        <section className="FM-Dash-Header">
            <div className='OE_Dashboard'>
                <div className='OE_Search_Notification'>
                    <div className="OE_search_bar">
                        <img className='OE_img_search' src={Search} alt="search" />
                        <input
                            value={search}
                            onChange={(i) => setSearch(i.target.value)}
                            type="text"
                            className="OE_search_input"
                            placeholder="Search... " />
                    </div>
                    <img className='OE_img_notification' src={notification} alt="notification" />
                </div>
                <div className='OE_Title'>
                    <p>{titleTable}</p>
                    <Link to={AddURL} className='OE_dashboard_btn'>ADD NEW {btnContent}</Link>
                </div>
                <div className='OE_Table_Parent'>
                    <table className='OE_Table'>
                        <thead className='OE_Thead'>
                            <tr>
                                <th>{th1}</th>
                                <th>{th2}</th>
                                <th>{th3}</th>
                                <th>{th4}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='OE_Tbody'>
                            {Data.filter((e) => {
                                return search.toLowerCase() === '' ? e : e.td1.toLowerCase().includes(search.toLowerCase());
                            }).map(e => {
                                const isHighlighted = colorRows.includes(e.id);
                                return (
                                    <tr key={e.id} className={`OE_tbody_tr ${isHighlighted ? 'HH-highlight' : ''}`}>
                                        <td>{e.td1}</td>
                                        <td>{e.td2}</td>
                                        <td>{e.td3}</td>
                                        <td>{e.td4}</td>
                                        <td className='OE_images'>
                                            <Link to={e.ViewURL}><img className='OE_img_view' src={View} alt="view" /></Link>
                                            <Link to={`${e.editURL}${e.id}`}><img className='OE_img_edit' src={Edit} alt="edit" /></Link>
                                            <Link to={e.delete}><img className='OE_img_delete' src={Delete} alt="delete" /></Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
