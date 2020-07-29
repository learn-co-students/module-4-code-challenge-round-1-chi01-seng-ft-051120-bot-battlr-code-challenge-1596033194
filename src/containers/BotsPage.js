import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      bots: [],
      yourBots: []
    }
  }

componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(botsArr => {
    const updatedBots = botsArr.map(botObj => {
      return {
        ...botObj,
        isRecruited: false
      }
    })

    this.setState({
      bots: updatedBots
    })
  })
}

handleAddToArmy = (clickedBot) => {

  if(clickedBot.isRecruited) {
    return
  }

  const updatedBots = this.state.bots.map(botObj => {
    if (botObj.id === clickedBot.id) {
      return {
        ...botObj,
        isRecruited: true
      }
    } else {
      return botObj
    }
  })

  // const updatedYourbot = clickedBot.map(botObj => {
  //   return {
  //     ...botObj,
  //     isRecruited: true
  //   }
  // })

  // can't figure out how to set status of added bot to isRecruited, was working on it above

  this.setState({
    bots: updatedBots,
    yourBots: [...this.state.yourBots, clickedBot]
  })
}

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots}/>
        <BotCollection
          handleAddToArmy={this.handleAddToArmy}
          bots={this.state.bots}/>

        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
