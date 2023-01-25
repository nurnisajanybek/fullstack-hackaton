import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button } from "@mui/material";
import { fontSize } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };
    
    
    
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
        const { name, value } = e.target;
        
     
        this.setState({ [name]: value });
        
    }
    
    
    render() {
        const cartCleaner = () => {
            localStorage.removeItem("cart");
        };
        return (
            <div id="PaymentForm" >
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input 
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Button sx={{width: "30px", height: "30px"}} variant="contained" color="success">
  BUY
</Button>
        </form>
      </div>
    );
  }
}