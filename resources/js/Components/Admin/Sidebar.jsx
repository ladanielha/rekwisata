import { Link } from "@inertiajs/react"
import './sidebar.css';


const Sidebar = () => {

  return (
  
    <div className="sidebar bg-primary">
        <ul>
            <li><Link href={route("dashboard")}>Dashbord</Link></li>
            <li><Link href={route("admin.wisata")}>Wisata</Link></li>
            <li><a href="#">AHP</a></li>
            <li><a href="#">cek</a></li>
        </ul>
    </div>


  )
}

export default Sidebar