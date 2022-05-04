import Image from "next/image"
import mcard from "../../../public/images/mastercard.png"

const Vision = () => {
  return (
    <div className='vision'>
      <div className="head">
        <h4>Vision UI</h4>
        <Image src={mcard} alt="mastercard" width={30} height={30} />
      </div>
      <h2>7812  2139  0823  7916</h2>
      <div className="infor">
        <div className="info">
          <span className="gray">VALID THRU</span>
          <span>05/24</span>
        </div>
        <div className="info">
          <span className="gray">CVV</span>
          <span>09X</span>
        </div>
      </div>
    </div>
  )
}

export default Vision