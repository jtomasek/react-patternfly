import React from 'react'
import PropTypes from 'prop-types'

import {
  ListViewCheckbox,
  ListViewExpand,
  ListViewItem,
  ListViewItemHeader,
  ListViewItemContainer,
  ListViewLeft,
  ListViewBody,
  ListViewDescription,
  ListViewDescriptionHeading,
  ListViewDescriptionText,
  ListViewMainInfo
} from './index'

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
    const {
      children,
      selectInput,
      stacked,
      expandedContent,
      leftContent,
      heading,
      description
    } = this.props
    const { expanded } = this.state

    if (expandedContent) {
      return (
        <ListViewItem stacked={stacked} expanded={this.state.expanded}>
          <ListViewItemHeader toggleExpanded={() => this.toggleExpanded()}>
            <ListViewExpand expanded={expanded} />
            {selectInput &&
              <ListViewCheckbox>
                {selectInput}
              </ListViewCheckbox>}
            <ListViewMainInfo>
              <ListViewLeft>
                {leftContent}
              </ListViewLeft>
              <ListViewBody>
                <ListViewDescription>
                  <ListViewDescriptionHeading>
                    {heading}
                  </ListViewDescriptionHeading>
                  <ListViewDescriptionText>
                    {description}
                  </ListViewDescriptionText>
                </ListViewDescription>
              </ListViewBody>
            </ListViewMainInfo>
          </ListViewItemHeader>
          <ListViewItemContainer
            expanded={expanded}
            onClose={() => this.toggleExpanded()}
          >
            {expandedContent}
          </ListViewItemContainer>
        </ListViewItem>
      )
    } else {
      return (
        <ListViewItem stacked={stacked}>
          {children}
        </ListViewItem>
      )
    }
  }
}
ExpandableListViewItem.propTypes = {
  selectInput: PropTypes.node,
  leftContent: PropTypes.node,
  heading: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node,
  expandedContent: PropTypes.node,
  stacked: PropTypes.bool.isRequired,
  onExpand: PropTypes.func,
  onExpandClose: PropTypes.func
}
ExpandableListViewItem.defaultProps = {
  expanded: false,
  stacked: false
}
