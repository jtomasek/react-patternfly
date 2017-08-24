import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col } from 'react-bootstrap'
// import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'

import {
  ListView,
  ExpandableListViewItem,
  ListViewItem,
  ListViewIcon
} from '../index'

const stories = storiesOf('ListView', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'ListView',
    documentationLink:
      'http://www.patternfly.org/pattern-library/content-views/list-view/'
  })
)

stories.addWithInfo('not expandable', `ListView usage example.`, () =>
  <ListView>
    <ListViewItem stacked>Hi, I am here</ListViewItem>
  </ListView>
)

class TestExpandableListView extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        { title: 'Item 1', description: 'This is Item 1 description' },
        { title: 'Item 2', description: 'This is Item 2 description' },
        { title: 'Item 3', description: undefined }
      ]
    }
  }

  renderItemExpandedContent(item) {
    return item.description
      ? <Row>
          <Col sm={12}>
            {item.description}
          </Col>
        </Row>
      : null
  }

  render() {
    return (
      <ListView>
        {this.state.items.map((item, index) =>
          <ExpandableListViewItem
            selectInput={<input type="checkbox" />}
            leftContent={<ListViewIcon icon="fa fa-plane" />}
            heading={item.title}
            description={item.description}
            expandedContent={this.renderItemExpandedContent(item)}
            key={index}
            stacked={boolean('Stacked', false)}
          >
            Hi, I am here
          </ExpandableListViewItem>
        )}
      </ListView>
    )
  }
}

stories.addWithInfo('expandable', `ListView usage example.`, () => {
  return <TestExpandableListView />
})
