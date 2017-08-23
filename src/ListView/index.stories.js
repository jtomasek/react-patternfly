import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { withKnobs, text } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'

import { ListView, ListViewItem } from '../index'

const stories = storiesOf('ListView', module)
// stories.addDecorator(withKnobs)
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
      items: [{ expanded: false }, { expanded: true }]
    }
  }

  toggleExpanded(index) {
    this.setState(
      prevState =>
        (prevState.items[index].expanded = !prevState.items[index].expanded)
    )
  }

  render() {
    return (
      <ListView>
        {this.state.items.map((item, index) =>
          <ListViewItem
            key={index}
            stacked
            toggleExpanded={() => this.toggleExpanded(index)}
            expanded={item.expanded}
            expandedContent="hellop"
          >
            Hi, I am here
          </ListViewItem>
        )}
      </ListView>
    )
  }
}

stories.addWithInfo('expandable', `ListView usage example.`, () => {
  return <TestExpandableListView />
})
