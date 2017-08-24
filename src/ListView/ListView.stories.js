import ClassNames from 'classnames'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col } from 'react-bootstrap'
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
    <ListViewItem
      heading="Hello world"
      description="This is ListViewItem"
      leftContent={<ListViewIcon icon="fa fa-plane" />}
    />
  </ListView>
)

class TestExpandableListView extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        { title: 'Item 1', description: 'This is Item 1 description' },
        { title: 'Item 2', description: 'This is Item 2 description' },
        {
          title: 'Item 3',
          description: 'This is Item 3 description',
          properties: { hosts: 2, clusters: 1, nodes: 11, images: 8 }
        },
        { description: 'This is Item without heading' },
        {},
        {
          title: 'Item without description',
          description: undefined
        }
      ]
    }
  }

  renderAdditionalItems(itemProperties) {
    return itemProperties
      ? Object.keys(itemProperties).map(prop => {
          const classNames = ClassNames('pficon', {
            'pficon-flavor': prop === 'hosts',
            'pficon-cluster': prop === 'clusters',
            'pficon-container-node': prop === 'nodes',
            'pficon-image': prop === 'images'
          })
          return (
            <span>
              <span className={classNames} />
              <strong>{itemProperties[prop]}</strong> {prop}
            </span>
          )
        })
      : null
  }

  render() {
    return (
      <ListView>
        {this.state.items.map((item, index) =>
          <ExpandableListViewItem
            key={index}
            selectInput={<input type="checkbox" />}
            leftContent={<ListViewIcon icon="fa fa-plane" />}
            additionalItems={this.renderAdditionalItems(item.properties)}
            heading={item.title}
            description={item.description}
            stacked={boolean('Stacked', false)}
          >
            <Row>
              <Col sm={11}>Hi, I am expandable content</Col>
            </Row>
          </ExpandableListViewItem>
        )}
        <ExpandableListViewItem
          selectInput={<input type="checkbox" />}
          leftContent={<ListViewIcon size="lg" icon="fa fa-plane" />}
          heading="This is the title"
          description="This item does not have"
          key="iAmSpecial"
          stacked={boolean('Stacked', false)}
        />
        <ExpandableListViewItem
          additionalItems={[
            <span>
              <span className="pficon pficon-flavor" /> Item 1
            </span>,
            <span>
              <span className="pficon pficon-flavor" /> Item 2
            </span>
          ]}
          key="meTOo"
          stacked={boolean('Stacked', false)}
        />
      </ListView>
    )
  }
}

stories.addWithInfo('expandable', `ListView usage example.`, () => {
  return <TestExpandableListView />
})
