import { Link } from "react-router-dom";
import Search from '../../../img/DashBoard/TableDash/Search.svg';
import notification from '../../../img/DashBoard/TableDash/notifications.svg';
import View from '../../../img/DashBoard/TableDash/View.svg';
import Edit from '../../../img/DashBoard/TableDash/Edit.svg';
import Delete from '../../../img/DashBoard/TableDash/Vector.svg';
import "./CrudTable.css";
import { useState, useEffect } from "react";
import { debounce } from 'lodash';
import { DeleteRow } from "../CRUD"
import Swal from "sweetalert2";

export default function CrudTable({ titleTable, th1, th2, th3, th4, btnContent, DataKey, AddURL }) {

    const storedJsonTable = JSON.parse(localStorage.getItem(DataKey))
    const [alertShown, setAlertShown] = useState(false);
    const [search, setSearch] = useState('');
    /* for  change color row  */
    const [colorRows, setColorRows] = useState([]);
    /* for pop up  */
    const [notFound, setNotFound] = useState(false);
    /* close pop up and set table to start state  */
    const ClosePopup = () => {
        setNotFound(false);
        setAlertShown(false);
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
            const matchingRows = storedJsonTable.filter((e) =>
                e.td1.toLowerCase().includes(search.toLowerCase())).map(e => e.id);
            setColorRows(matchingRows);
            if (matchingRows.length === 0  && !alertShown) {
                setNotFound(true);
                setAlertShown(true);
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
    }, [search,alertShown,storedJsonTable]);
    /* end useEffect  */
    useEffect(() => {
        if (notFound) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No results found!",
                willClose: ClosePopup,
                confirmButtonColor: '#504DEE'
            });
        }
    }, [notFound]);
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
                <div className='FM_Table_Parent'>
                    <table className='FM_Table'>
                        <thead className='FM_Thead'>
                            <tr>
                                <th>{th1}</th>
                                <th>{th2}</th>
                                <th>{th3}</th>
                                <th>{th4}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='FM_Tbody'>
                            {storedJsonTable ? (
                                storedJsonTable.filter((e) => {
                                    return search.toLowerCase() === '' ? e : e.td1.toLowerCase().includes(search.toLowerCase());
                                }).map((e, index) => {
                                    const isHighlighted = colorRows.includes(e.id)
                                    return (
                                        <tr key={index} className={`FM_tbody_tr ${e.colorClass} ${isHighlighted ? 'HH-highlight' : ''} `}>
                                            <td>{e.td1}</td>
                                            <td>{e.td2}</td>
                                            <td>{e.td3}</td>
                                            <td>{e.td4}</td>
                                            <td className='FM_images'>
                                                <Link to={e.ViewURL + index}><img className='FM_img_view' src={View} /></Link>
                                                <Link to={e.editURL + index}><img className='FM_img_edit' src={Edit} /></Link>
                                                <img className='FM_img_delete' onClick={() => DeleteRow(DataKey, index)} src={Delete} />
                                            </td>
                                        </tr>
                                    )
                                })) : ('')

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
