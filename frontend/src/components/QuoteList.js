import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class QuoteList extends Component{


    state={
        quotes:[]
    }

    async componentDidMount(){
        this.getQuotes();
    }

    async getQuotes(){
        const res = await axios.get('http://localhost:3500/api/quotes');
        this.setState({
            quotes:res.data
        })
    }

    deleteQuote=async (id)=>{
        await axios.delete('http://localhost:3500/api/quote/'+id)
        this.getQuotes();
    }
    render(){
        return(
            <div>
                <h1>QuoteList</h1>
                <hr className="my-2"/>
                <div className="row p-2">
                {
                    this.state.quotes.map(qte=>{
                        return(
                            <div className="col-md-4 p-2" key={qte._id}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h3 className="text-center p-4">{qte.quote}</h3>
                                        <div className="ml-auto">
                                            <p className="font-italic text-center">
                                                {qte.author}
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <form>
                                                    <button 
                                                    className="btn btn-danger btn-block shadow"
                                                        onClick={()=>this.deleteQuote(qte._id)}>
                                                        Delete
                                                    </button>
                                                </form>
                                            </div>
                                            <div className="col-md-6">
                                                <Link className="btn btn-info btn-block" to={"/edit/"+qte._id}>Edit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        )
    }
}

export default QuoteList;