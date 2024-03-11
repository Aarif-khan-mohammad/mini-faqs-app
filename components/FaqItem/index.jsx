import {Component} from 'react'
import './index.css'

class FaqItem extends Component{

  state = {isShownAns : false}

  toggleAnswer = () =>{
    this.setState({isShownAns : !this.state.isShownAns})
  }
  
  render(){
    const {faqDetails} = this.props
    const { questionText, answerText} = faqDetails
    const {isShownAns} = this.state

    const btnSwitch = isShownAns ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png' :  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png' ;

    const btnAlt = isShownAns ? 'minus' : 'plus' ;

    const listType = isShownAns ? 'ans' : 'qn' ;

    return(
      <li className= {listType} >
        <div className='top-container'>
          <h3 className='question'>{questionText}</h3>
          <button className='button-el' type='button' onClick={this.toggleAnswer}><img src={btnSwitch} alt = {btnAlt} className='image-el'/></button>
        </div>
        {isShownAns && 
          <div className='answer'>
            <hr className='line'/>
            <p>{answerText}</p>
          </div>
        }

      </li>
    )
  }
}

export default FaqItem;