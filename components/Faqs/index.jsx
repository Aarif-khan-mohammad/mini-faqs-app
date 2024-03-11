import FaqItem from '../FaqItem/index.jsx'
import './index.css'

const Faqs = (props)=>{
  const {faqsList} = props
  
    return(
      <div className="faqs">
        <h1 className='heading'>FAQs</h1>
        <div className='faqs-container'>
          <ul className='cards-container'>
            {faqsList.map((each)=> (
              <FaqItem key={each.id} faqDetails={each} />
                ))}
          </ul>
        </div>
      </div>
    )
}

export default Faqs;