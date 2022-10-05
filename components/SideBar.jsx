
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline'
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import React from 'react'
import SideBarRow from './SideBarRow'

const SideBar = () => {
    const {data, loading} = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SideBarRow src={data?.user.image} title={data?.user.name} />
        <SideBarRow Icon={UsersIcon} title="Friends" />
        <SideBarRow Icon={UserGroupIcon} title="Groups" />
        <SideBarRow Icon={ShoppingBagIcon} title="Marketplace" />

        <SideBarRow Icon={DesktopComputerIcon} title="Watch" />
        <SideBarRow Icon={CalendarIcon} title="Events" />
        <SideBarRow Icon={ClockIcon} title="Memories" />
        <SideBarRow Icon={ChevronDownIcon} title="Dee MOre" />
    </div>
  )
}

export default SideBar