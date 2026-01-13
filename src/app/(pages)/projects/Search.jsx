import React from 'react'

import style from '../../../Sass/projects/search.module.scss'
import { FaSearch } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
const Search = () => {
  return (


<div className={style.searchWrapper}>
  <Input
    placeholder="Search projects..."
    className={style.searchInput}
  />

 <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className={style.filterBtn}>
      All Projects
      <ChevronDown size={18} className={style.arrowIcon} />
    </button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end">
    <DropdownMenuItem>All Projects</DropdownMenuItem>
    <DropdownMenuItem>Web</DropdownMenuItem>
    <DropdownMenuItem>Mobile</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


  <div className={style.icon}>
    <FaSearch size={24} />
  </div>
</div>

  )
}

export default Search



{/* <div className={style.searchWrapper}>
  <Input
    placeholder="Search projects..."
    className={style.searchInput}
  />


  <button className={style.filterBtn}>
    All Projects
  </button>

  <div className={style.icon}>
    <FaSearch size={24} />
  </div>
</div> */}