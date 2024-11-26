import React from 'react'
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import './Header.css'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


const Header = () => {
  return (
    <div className='header_components'>
      <div className='first_heading'>
        <h3><i>REWARDIFY</i></h3>
        <p>Welcome, Kishor&#9995;</p>
      </div>
        <ul className='second_heading'>
            <li className='triangle_border'>Xcoins:300 <span className='moneyconins'><RiMoneyRupeeCircleFill />

            </span></li>
            <li className='space_border'><span><FaHandHoldingUsd /></span>
            </li>
            <li  className='space_border'><span><CiBellOn /></span>
            </li>
            <li  className='space_border'><span><CiUser /></span>
            </li>
        </ul>
    </div>
  )
}

export default Header