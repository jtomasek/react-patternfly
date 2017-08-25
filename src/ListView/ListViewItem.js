import React from 'react'
import PropTypes from 'prop-types'

import {
  ListViewExpand,
  ListGroupItem,
  ListGroupItemHeader,
  ListGroupItemContainer
} from './index'

import ListViewRow from './ListViewRow'

export default class ListViewItem extends React.Component {
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
            <ListViewRow {...other} />
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
      return (
        <ListGroupItem stacked={stacked}>
          <ListViewRow {...other} />
        </ListGroupItem>
      )
    }
  }
}
ListViewItem.propTypes = {
  children: PropTypes.node,
  stacked: PropTypes.bool.isRequired,
  onExpand: PropTypes.func,
  onExpandClose: PropTypes.func
}
ListViewItem.defaultProps = {
  expanded: false,
  stacked: false
}
