import React,{useState} from 'react'
import './Contents.css'
import { FaCubes } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";




import { FaChevronDown } from "react-icons/fa";


const Contents = () => {
    const [showShopId, setShowShopId] = useState(false);
    const toogleShopid =()=>{
        setShowShopId(!showShopId );
    }

  return (
    <div className='content_section'>
        <div>
        <div className='profile_image'>
            <img src='https://s3-alpha-sig.figma.com/img/1881/411d/e162cc928a81bdb2d30a865dca47acfb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBVCTXjnSgAOyn2d0WMLuvg3qsgG-loQSQFN4JRvtK4oKoT3gisZIaVCYG05roeDEPm893mvAumukBjyq45LXpn5v3TLsEqSAUnkDoV4kkqwBJLggQZl2YvFhgeEEqOSoynA~XLeb3dZEuCfxPkLitVG93qCp8B0hoW~iFxgdIrU8FWw-DSWCp0-Bs4FvvfGGTDPaklxKrIqOK8J5itnbFOf4Kfq-06dCbmsCxQt83cGbkyOXERA5br7SMCtE-jLq3JwTobQqy-jIApn-WG8BWEScwCmDSo0dL1bHyJOecLFSHi8NsCQBnWmLw8M0ODmaTYcIBIR88zRwfJIQoKxdQ__' alt=''/>
        </div>
        <div className='profile_info'>
             <h3>Kannan departmental   <span onClick={toogleShopid}><FaChevronDown />
             </span></h3>
          
             {showShopId &&<p className='shop_id'>Shop ID: 123456789</p>}
        </div>
        </div>
        <ul className='slide_contents'>
            <li><span><FaCubes />
            </span>Dashboard</li>
            <li><span><CiDeliveryTruck />
            </span>Orders</li>
            <li><span><MdAddShoppingCart />
            </span>My Products</li>
            <li><span><CiUser />
</span>Profile</li>
        </ul>
      
    </div>
  )
}

export default Contents