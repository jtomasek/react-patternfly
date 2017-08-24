import React from 'react'
import PropTypes from 'prop-types'

import {
  ListViewExpand,
  ListGroupItem,
  ListGroupItemHeader,
  ListGroupItemContainer
} from './index'

import ListViewItem from './ListViewItem'
import ListViewItemWrapper from './ListViewItemWrapper'

export default class ExpandableListViewItem extends React.Component {
  constructor() {
    super()
    this.state = { expanded: false }
  }

  toggleExpanded(index) {
    const { onExpand, onExpandClose } = this.props
    if (this.state.expanded) {
      onExpandClose && onExpandClose()
    } else {
      onExpand && onExpand()
    }
    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }

  render() {
    const { children, stacked, ...other } = this.props
    const { expanded } = this.state

    if (children) {
      return (
        <ListGroupItem stacked={stacked} expanded={this.state.expanded}>
          <ListGroupItemHeader toggleExpanded={() => this.toggleExpanded()}>
            <ListViewExpand expanded={expanded} />
            <ListViewItemWrapper {...other} />
          </ListGroupItemHeader>
          <ListGroupItemContainer
            expanded={expanded}
            onClose={() => this.toggleExpanded()}
          >
            {children}
          </ListGroupItemContainer>
        </ListGroupItem>
      )
    } else {
      return <ListViewItem stacked={stacked} {...other} />
    }
  }
}
ExpandableListViewItem.propTypes = {
  children: PropTypes.node,
  stacked: PropTypes.bool.isRequired,
  onExpand: PropTypes.func,
  onExpandClose: PropTypes.func
}
ExpandableListViewItem.defaultProps = {
  expanded: false,
  stacked: false
}
