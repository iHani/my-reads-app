import React, { Component } from 'react';
import { Image, Dropdown, Container, List, Icon, Rating } from 'semantic-ui-react'

const img = 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'

const options = [
  { key: 'user', text: 'Currently Reading', icon: '' },
  { key: 'settings', text: 'Want to Read', icon: 'check' },
  { key: 'sign-out', text: 'Read', icon: '' },
]

const trigger = (
  <span>
    <Icon name='dropdown' />
  </span>
)

class CurrentlyReading extends Component {

  render () {
    return (
      <div>
        <Container>

          <List horizontal relaxed>
            <List.Item style={{ textAlign: 'center' }}>
              <List.Content >
                <Image src={img} />
                <List.Header style={{ padding: '.5em 0em' }}>Book Title</List.Header>
                By Author Name
              </List.Content>
              <List.Content style={{ padding: '.5em 0em' }}>
                <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
                <Rating clearable maxRating={5} style={{ float: 'right' }}/>
              </List.Content>
            </List.Item>

            <List.Item style={{ textAlign: 'center' }}>
              <List.Content >
                <Image src={img} />
                <List.Header style={{ padding: '.5em 0em' }}>Book Title</List.Header>
                By Author Name
              </List.Content>
              <List.Content style={{ padding: '.5em 0em' }}>
                <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
                <Rating clearable maxRating={5} style={{ float: 'right' }}/>
              </List.Content>
            </List.Item>

            <List.Item style={{ textAlign: 'center' }}>
              <List.Content >
                <Image src={img} />
                <List.Header style={{ padding: '.5em 0em' }}>Book Title</List.Header>
                By Author Name
              </List.Content>
              <List.Content style={{ padding: '.5em 0em' }}>
                <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
                <Rating clearable maxRating={5} style={{ float: 'right' }}/>
              </List.Content>
            </List.Item>

            <List.Item style={{ textAlign: 'center' }}>
              <List.Content >
                <Image src={img} />
                <List.Header style={{ padding: '.5em 0em' }}>Book Title</List.Header>
                By Author Name
              </List.Content>
              <List.Content style={{ padding: '.5em 0em' }}>
                <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
                <Rating clearable maxRating={5} style={{ float: 'right' }}/>
              </List.Content>
            </List.Item>

          </List>

        </Container>
      </div>
    )
  }
}

export default CurrentlyReading
