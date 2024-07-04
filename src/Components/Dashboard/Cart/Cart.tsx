import { useState } from 'react'
import QRcode from '../../../Assets/QRcode.jpg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const cartItems = [
    {
      name: "Chapati",
      id: 1,
      description: "good Food good Mood",
      statusAvailability: "available",
      imageUrl: "",
      restaurantId: 1,
      rating: 3,
      price: 20,
    },
    {
      name: "Rice",
      id: 2,
      description: "good Food good Mood",
      statusAvailability: "available",
      imageUrl: "",
      restaurantId: 1,
      rating: 2,
      price: 30,
    },
    {
      name: "Chicken",
      id: 3,
      description: "good Food good Mood",
      statusAvailability: "out of stock",
      imageUrl: "",
      restaurantId: 1,
      rating: 4,
      price: 50,
    },
    {
      name: "Fish",
      id: 4,
      description: "good Food good Mood",
      statusAvailability: "available",
      imageUrl: "",
      restaurantId: 1,
      rating: 5,
      price: 40,
    },
  ];

export default function Cart() {
    const [showQR, setShowQR]= useState(false);
    const [visible, setVisible] = useState(false);
    const handlePayment=()=>{
        setShowQR(true);
    }
const handleTokengeneration = () =>{
  setVisible(true);
}

  return (
    <>
    <div>
        {
            showQR ? <div className='flex align-items-center flex-column gap-3'>
                <img src={QRcode} alt="QRcode" width='300px' height='300px'/> 
                <div><Button onClick={handleTokengeneration}>Generate OrderId</Button></div>
                
            </div> :   <div style={{width:'50%', margin:'auto'}}>
            <div className='flex gap-8'>
                <p style={{width:"100px"}}>ITEM</p>
                <p style={{width:"100px"}}>PRICE</p>
                <p style={{width:"100px"}}>QUANTITY</p>
                <p style={{width:"100px"}}>AMOUNT</p>
            </div>
            {
                cartItems.map((i)=>{
                    return(
                        <div className='flex gap-8'>
                        <p style={{width:"100px"}}>{i.name}</p>
                        <p style={{width:"100px"}}>{i.price}</p>
                        <p style={{width:"100px"}} className='flex gap-1'><button>+</button>{10}<button>-</button></p>
                        <p style={{width:"100px"}}>200</p>
                        </div>
                    )
                })
            }
    
        <div style={{border:'2px solid black', width:'700px'}}></div>
        <div style={{display:'flex',alignItems:'flex-end', justifyContent:'flex-end' }}>  <p style={{ width:'31%'}}>Total:800 Rs</p></div>
       
        <p style={{display:'flex', justifyContent:'center' }} className='flex mt-8'>
        <Button onClick={handlePayment} >Proceed To Payment</Button>
        </p>
        
    
        </div>
        }
    </div>

    <Dialog header="Your Order Id has been generated successfully!" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <p className="flex justify-content-center">
       <h2>349</h2>
    </p>
</Dialog>

  </>
  )
}
