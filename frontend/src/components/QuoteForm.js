import axios from 'axios';
import React, { Component} from 'react';

class QuoteForm extends Component{
    
    state={
        quote:'',
        author:''
    }

    async componentDidMount(){
        if(this.props.match.params.id){
            const id = this.props.match.params.id
            const res = await axios.get(`http://localhost:3500/api/quote/${id}`)
            this.setState({
                quote:res.data.quote,
                author:res.data.author,
                editing:true,
                _id:id
            })
        }
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    handleSubmit= async (e)=>{
        e.preventDefault();
        const newQuote ={
            quote:this.state.quote,
            author:this.state.author
        }
        if (this.state.editing){
            await axios.put('http://localhost:3500/api/quote/'+this.state._id,newQuote)
            this.setState({editing:false})
            window.location.href='/quotes'
            
        }else{
            await axios.post('http://localhost:3500/api/quote',newQuote)
            window.location.href='/quotes'
        }
    }

    render(){
        return(
            <div className="p-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4 my-4">
                        <div className="card shadow">
                            <div className="card-header">
                                <h5 className="text-center">
                                {this.state.editing ? 'Update a Quote' : 'Insert new Quote'}
                                </h5>
                            </div>
                            <div className="card-body">
                                
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            name="author"
                                            value={this.state.author}
                                            placeholder="Enter author"
                                            className="form-control"
                                            onChange={this.handleOnChange}
                                            autoFocus/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="quote" 
                                            rows="7"
                                            placeholder="Enter quote"
                                            className="form-control"
                                            onChange={this.handleOnChange}
                                            style={{resize:'none'}}
                                            value={this.state.quote}>
                                            </textarea>
                                    </div>
                                <form onSubmit={this.handleSubmit}>
                                    <button type="submit"
                                        className="btn btn-primary btn-block"
                                        >{this.state.editing ? 'Update Quote' : 'Save Quote'}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteForm;