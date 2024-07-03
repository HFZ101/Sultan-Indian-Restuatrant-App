import { useEffect, useState } from 'react'

import '../assets/styles/Styles.css'
import data from './menu.json'
import Starter from'./Starter'

export default function Menu(){



    const [starters, setStarters] = useState(data[0].starters)
    const [mains, setMains] = useState(data[0].mains)
    const [sides, setSides] = useState(data[0].sides)
  

    return(
    
    <div className='menu-options'>
        
       <div>
          <h2>Starter</h2>
          {Object.keys(starters).map((key) => (
            <Starter  
                key = {key}
                dish = {starters[key].dish}           
                description = {starters[key].descriptions}
                price ={starters[key].price} 
            />       
          ))}
        </div>
      
        <div>
          <h2>Mains</h2>
          {Object.keys(mains).map((key) => (
            <Starter 
              key = {key}
              dish = {mains[key].dish}           
              description = {mains[key].descriptions}
              price ={mains[key].price}  
            />
           ))}
        </div>
      
        <div>
          <h2>Extras</h2>
          {Object.keys(sides).map((key) => (
            <Starter 
              key = {key}
              dish = {sides[key].dish}           
              description = {sides[key].descriptions}
              price ={sides[key].price}   
            />
          ))}
        </div>

    </div> 
    )
}
