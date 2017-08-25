import ClassNames from 'classnames'
// import { Field } from 'redux-form'
import React from 'react'
import PropTypes from 'prop-types'

/* ListView example usage:

<ListView>
  <ListGroupItem stacked expanded>

    <ListGroupItemHeader toggleExpanded={functionToToggle}> // required only if the ListGroupItem is supposed to be expandable
      <ListViewExpand expanded />
      <ListViewCheckbox disabled={inProgress} name={`values.${node.uuid}`} />
      <ListViewActions>
        // buttons, dropdowns...
      </ListViewActions>
      <ListViewMainInfo>
        <ListViewLeft>
          <ListViewIcon size="sm" icon={iconClass} />
        </ListViewLeft>
        <ListViewBody>
          <ListViewDescription>
            <ListViewDescriptionHeading>
              {name}
            </ListViewDescriptionHeading>
            <ListViewDescriptionText>
              {description}
            </ListViewDescriptionText>
          </ListViewDescription>
          <ListViewAdditionalInfo>
            <ListViewInfoItem>
              <span className="pficon pficon-flavor" />
              {Item1}
            </ListViewInfoItem>
            <ListViewInfoItem>
              <span className="pficon pficon-cpu" />
              {Item2}
            </ListViewInfoItem>
          </ListViewAdditionalInfo>
        </ListViewBody>
      </ListViewMainInfo>
    </ListGroupItemHeader>

    <ListGroupItemContainer onClose={functionWhichClosesMe} expanded> // expandable content
      <Row>Some content goes here</Row>
    </ListGroupItemContainer>

  </ListGroupItem>
  ...
</ListView>
*/

export const ListView = ({ children }) =>
  <div className="list-group list-view-pf list-view-pf-view">
    {children}
  </div>
ListView.propTypes = {
  children: PropTypes.node
}

export const ListGroupItem = ({ children, stacked, expanded }) => {
  const classes = ClassNames({
    'list-group-item': true,
    'list-view-pf-expand-active': expanded,
    'list-view-pf-stacked': stacked
  })
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
ListGroupItem.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool.isRequired,
  stacked: PropTypes.bool.isRequired
}
ListGroupItem.defaultProps = {
  expanded: false,
  stacked: false
}

export const ListGroupItemHeader = ({ children, toggleExpanded }) => {
  const handleClick = e => {
    // ignore selected child elements click
    if (
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'A' &&
      e.target.tagName !== 'INPUT' &&
      !e.target.classList.contains('fa-ellipsis-v')
    ) {
      toggleExpanded()
    }
  }
  return (
    <div className="list-group-item-header" onClick={handleClick}>
      {children}
    </div>
  )
}
ListGroupItemHeader.propTypes = {
  children: PropTypes.node,
  toggleExpanded: PropTypes.func.isRequired
}

export const ListGroupItemContainer = ({ children, expanded, onClose }) => {
  const classes = ClassNames({
    'list-group-item-container container-fluid': true,
    hidden: !expanded
  })
  return (
    <div className={classes}>
      {onClose &&
        <div className="close">
          <span className="pficon pficon-close" onClick={onClose} />
        </div>}
      {expanded && children}
    </div>
  )
}
ListGroupItemContainer.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool.isRequired,
  onClose: PropTypes.func
}
ListGroupItemContainer.defaultProps = {
  expanded: false
}

export const ListViewCheckbox = ({ children }) =>
  <div className="list-view-pf-checkbox">
    {children}
  </div>

ListViewCheckbox.propTypes = {
  children: PropTypes.node.isRequired
}

export const ListViewExpand = ({ expanded }) => {
  const classes = ClassNames({
    'fa fa-angle-right': true,
    'fa-angle-down': expanded
  })
  return (
    <a className="list-view-pf-expand">
      <span className={classes} />
    </a>
  )
}
ListViewExpand.propTypes = {
  expanded: PropTypes.bool.isRequired
}
ListViewExpand.defaultProps = {
  expanded: false
}

export const ListViewActions = ({ children }) =>
  <div className="list-view-pf-actions">
    {children}
  </div>
ListViewActions.propTypes = {
  children: PropTypes.node
}

export const ListViewMainInfo = ({ children }) =>
  <div className="list-view-pf-main-info">
    {children}
  </div>
ListViewMainInfo.propTypes = {
  children: PropTypes.node
}

export const ListViewLeft = ({ children }) =>
  <div className="list-view-pf-left">
    {children}
  </div>
ListViewLeft.propTypes = {
  children: PropTypes.node
}

export const ListViewIcon = ({ icon, size }) => {
  return <span className={`list-view-pf-icon-${size} ${icon}`} />
}
ListViewIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}
ListViewIcon.defaultProps = {
  size: 'sm'
}

export const ListViewBody = ({ children }) =>
  <div className="list-view-pf-body">
    {children}
  </div>
ListViewBody.propTypes = {
  children: PropTypes.node
}

export const ListViewDescription = ({ children }) =>
  <div className="list-view-pf-description">
    {children}
  </div>
ListViewDescription.propTypes = {
  children: PropTypes.node
}

export const ListViewDescriptionHeading = ({ children }) =>
  <div className="list-group-item-heading">
    {children}
  </div>
ListViewDescriptionHeading.propTypes = {
  children: PropTypes.node
}

export const ListViewDescriptionText = ({ children }) =>
  <div className="list-group-item-text">
    {children}
  </div>
ListViewDescriptionText.propTypes = {
  children: PropTypes.node
}

export const ListViewAdditionalInfo = ({ children }) =>
  <div className="list-view-pf-additional-info">
    {children}
  </div>
ListViewAdditionalInfo.propTypes = {
  children: PropTypes.node
}

export const ListViewInfoItem = ({ children, stacked }) => {
  const classes = ClassNames(
    { 'list-view-pf-additional-info-item-stacked': stacked },
    'list-view-pf-additional-info-item'
  )
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
ListViewInfoItem.propTypes = {
  children: PropTypes.node,
  stacked: PropTypes.bool.isRequired
}
ListViewInfoItem.defaultProps = {
  stacked: false
}
