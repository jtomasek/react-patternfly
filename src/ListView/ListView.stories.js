import ClassNames from 'classnames'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col } from 'react-bootstrap'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'

import {
  Button,
  DropdownKebab,
  ListView,
  ListViewInfoItem,
  ListViewItem,
  ListViewIcon,
  MenuItem
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

const items = [
  {
    title: 'Item 1',
    description: 'This is Item 1 description',
    properties: { hosts: 3, clusters: 1, nodes: 7, images: 4 }
  },
  {
    title: 'Item 2',
    description: 'This is Item 2 description',
    properties: { hosts: 2, clusters: 1, nodes: 11, images: 8 }
  },
  {
    title: 'Item 3',
    description: 'This is Item 3 description',
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 }
  },
  { description: 'This is Item without heading' },
  {
    properties: { hosts: 4, clusters: 2, nodes: 9, images: 8 }
  },
  {
    title: 'Item without description'
  }
]

const renderActions = () =>
  <div>
    <Button>Details</Button>
  </div>

const renderAdditionalItems = itemProperties => {
  return (
    itemProperties &&
    Object.keys(itemProperties).map(prop => {
      const classNames = ClassNames('pficon', {
        'pficon-flavor': prop === 'hosts',
        'pficon-cluster': prop === 'clusters',
        'pficon-container-node': prop === 'nodes',
        'pficon-image': prop === 'images'
      })
      return (
        <ListViewInfoItem key={prop}>
          <span className={classNames} />
          <strong>{itemProperties[prop]}</strong> {prop}
        </ListViewInfoItem>
      )
    })
  )
}

const expandedItemText = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`

stories.addWithInfo(
  'List of expandable items',
  `ListView usage example.`,
  () => {
    return (
      <ListView>
        {items.map((item, index) =>
          <ListViewItem
            key={index}
            actions={renderActions(item.actions)}
            selectInput={<input type="checkbox" />}
            leftContent={<ListViewIcon icon="fa fa-plane" />}
            additionalItems={renderAdditionalItems(item.properties)}
            heading={item.title}
            description={item.description}
            stacked={boolean('Stacked', false)}
          >
            <Row>
              <Col sm={11}>
                {expandedItemText}
              </Col>
            </Row>
          </ListViewItem>
        )}
      </ListView>
    )
  }
)

stories.addWithInfo('List Item variants', `ListView usage example.`, () =>
  <ListView>
    <ListViewItem
      key="item1"
      description="Expandable item with description, additional items and actions"
      heading="Event One"
      selectInput={<input type="checkbox" />}
      leftContent={<ListViewIcon icon="fa fa-plane" />}
      additionalItems={[
        <ListViewInfoItem key="1">
          <span className="pficon pficon-flavor" /> Item 1
        </ListViewInfoItem>,
        <ListViewInfoItem key="2">
          <span className="fa fa-bug" /> Item 2
        </ListViewInfoItem>
      ]}
      actions={
        <div>
          <Button>Action 1</Button>
          <DropdownKebab id="action2kebab" pullRight>
            <MenuItem>Action 2</MenuItem>
          </DropdownKebab>
        </div>
      }
      stacked={boolean('Stacked', false)}
    >
      Expanded Content
    </ListViewItem>
    <ListViewItem
      key="item2"
      leftContent={<ListViewIcon size="lg" icon="fa fa-plane" />}
      heading={
        <span>
          This is EVENT One that is with very LONG and should not overflow and
          push other elements out of the bounding box.
          <small>Feb 23, 2015 12:32 am</small>
        </span>
      }
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      stacked={boolean('Stacked', false)}
    />
    <ListViewItem
      key="item3"
      selectInput={<input type="checkbox" />}
      heading="Stacked Additional Info items"
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      additionalItems={[
        <ListViewInfoItem key="1" stacked>
          <strong>113,735</strong>
          <span>Service One</span>
        </ListViewInfoItem>,
        <ListViewInfoItem key="2" stacked>
          <strong>35%</strong>
          <span>Service Two</span>
        </ListViewInfoItem>
      ]}
      stacked={boolean('Stacked', false)}
    />
    <ListViewItem
      key="item4"
      additionalItems={[
        <ListViewInfoItem key="1">
          <span className="pficon pficon-screen" /> Only Additional
        </ListViewInfoItem>,
        <ListViewInfoItem key="2">
          <span className="pficon pficon-cluster" /> Info Items
        </ListViewInfoItem>
      ]}
      stacked={boolean('Stacked', false)}
    />
    <ListViewItem
      key="item5"
      heading="Custom Event Icon"
      leftContent={
        <ListViewIcon
          size="md"
          icon="pficon pficon-ok list-view-pf-icon-success"
        />
      }
      description={
        <span>
          The following snippet of text is rendered as <a href="">link text</a>.
        </span>
      }
      additionalItems={[
        <ListViewInfoItem key="1">
          <span className="pficon pficon-screen" />
          <strong>108</strong> Hosts
        </ListViewInfoItem>,
        <ListViewInfoItem key="2">
          <span className="pficon pficon-cluster" />
          <strong>28</strong> Clusters
        </ListViewInfoItem>
      ]}
      stacked={boolean('Stacked', false)}
    />
  </ListView>
)
