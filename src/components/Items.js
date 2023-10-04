import { ImUsers } from 'react-icons/im';
import { PiPatreonLogo } from "react-icons/pi";
import { BsSpeedometer } from "react-icons/bs";
import { BsCarFront } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"

const Items = ({currentPage, sendDatainItem}) => {
    
    const productsPerPage = 6;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sendDatainItem && sendDatainItem.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div className='d-grid' style={{ gridTemplateColumns: "repeat(3, 1fr)"}}>
            {currentProducts && currentProducts.map((item) => {
                return(
                    <div className="card p-2 bg-body-tertiary" style={{borderRadius: "20px", width: "30rem", marginTop: "30px" }}>
                        <div>
                            <img src={item.image} className="card-img-top p-2" style={{height: "20rem", borderRadius:"20px"}} alt=""></img>
                        </div>
                        <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                            <h5 className="card-title" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{item.title}</h5>
                            <h5 className="year p-1" style={{ border: "1px dotted blue", borderRadius: "20px" }}>{item.start_production}</h5>
                        </div>
        
                        <div className="" style={{ marginLeft: "20px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                            <div className='d-flex gap-1'>
                                <ImUsers className='text-primary'/>
                                <h6>people</h6>
                            </div>
        
                            <div className='d-flex gap-1'>
                            <BsCarFront className='text-primary'/>
                                <h6>{item.brand}</h6>
                            </div>
                            <div className='d-flex gap-1'>
                                <BsSpeedometer className='text-primary'/>
                                <h6>{item.distance}</h6>
                            </div>
                            <div className='d-flex gap-1'>
                            <PiPatreonLogo className='text-primary'/>
                                <h6>{item.relevance}</h6>
                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="d-flex" style={{ marginLeft: "20px", marginRight: "20px", justifyContent: "space-between" }}>
                            <h3 className="card-text " >{item.price}</h3>
                            <div className='d-flex gap-3'>
                                <AiOutlineHeart style={{fontSize: "30px", background: "#b1c9e3"}} className='text-primary p-1 rounded'/>
                                <a href="#" className="btn mb-1 btn-primary text-center">Rent Now</a>
                            </div>
                            
                        </div>
                    </div>
                )
               
            })}
        </div>
    );
}
export default Items;