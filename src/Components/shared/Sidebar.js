import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import '../shared/styles/sidebar.css'



const linkClass ='flex items-center gap-2 font-light px-3 py-2 hover:bg-violet-200 hover:no-underline active:bg-violet-200 rounded-lg text-base';
const activeLinkClass = 'bg-violet-200 text-black rounded-lg';  

export default function Sidebar() {
 
  return (
    <div className="w-60 p-3 flex flex-col" style={{ backgroundColor: '#990099' }}>
      <div className="flex items-center gap-2 px-1 py-3">
      <FontAwesomeIcon icon={faUsers}   style={{ marginRight: '10px'  , color:'white'}}/>
        <span className="text-neutral-200 text-lg">CollaboraHub</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5" >
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} activeLinkClass={activeLinkClass}/>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-100">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} activeLinkClass={activeLinkClass}/>
        ))}
        <div className={classNames(linkClass, 'cursor-pointer text-neutral-200')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          <button >Logout</button>
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ link,activeLinkClass }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? activeLinkClass : 'text-neutral-400',
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  )
}
