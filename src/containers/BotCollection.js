import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {
            this.props.bots.map(botObj => {
              return <BotCard
                handleAddToArmy={this.props.handleAddToArmy}
                bot={botObj} />
            })
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
