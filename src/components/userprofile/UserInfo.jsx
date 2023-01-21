import React, { Component } from 'react'

import "./user.css"
import { faker } from '@faker-js/faker';

export default class UserInfo extends Component {
  render() {
    return (
      <>
      <div className='cardP1'>
      <div className='discriptionP1'>
        <img src={faker.image.abstract()} alt="" className='Pic1'/>
        <img className="Pic2" src={faker.image.avatar()} alt="" />
      </div>
      <div className='DetailP'>
     <h1>{faker.name.firstName()}</h1>
     <h3> Follower-{faker.address.buildingNumber()}</h3>
     <h3> Following - {faker.address.buildingNumber()}</h3>
     <h4>{faker.internet.userName()}</h4>
      </div>
      </div>
      </>
    )
  }
}
