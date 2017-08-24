import React from 'react'
import PropTypes from 'prop-types'

import {
  ListViewActions,
  ListViewAdditionalInfo,
  ListViewAdditionalInfoItem,
  ListViewCheckbox,
  ListViewLeft,
  ListViewBody,
  ListViewDescription,
  ListViewDescriptionHeading,
  ListViewDescriptionText,
  ListViewMainInfo
} from './index'

const ListViewItemWrapper = ({
  actions,
  additionalItems,
  selectInput,
  leftContent,
  heading,
  description
}) =>
  <div style={{ display: 'flex', flex: 1 }}>
    {selectInput &&
      <ListViewCheckbox>
        {selectInput}
      </ListViewCheckbox>}
    {actions &&
      <ListViewActions>
        {actions}
      </ListViewActions>}
    <ListViewMainInfo>
      {leftContent &&
        <ListViewLeft>
          {leftContent}
        </ListViewLeft>}
      <ListViewBody>
        {(heading || description) &&
          <ListViewDescription>
            {heading &&
              <ListViewDescriptionHeading>
                {heading}
              </ListViewDescriptionHeading>}
            {description &&
              <ListViewDescriptionText>
                {description}
              </ListViewDescriptionText>}
          </ListViewDescription>}
        {additionalItems &&
          <ListViewAdditionalInfo>
            {additionalItems.map((item, index) =>
              <ListViewAdditionalInfoItem key={index}>
                {item}
              </ListViewAdditionalInfoItem>
            )}
          </ListViewAdditionalInfo>}
      </ListViewBody>
    </ListViewMainInfo>
  </div>

ListViewItemWrapper.propTypes = {
  actions: PropTypes.node,
  additionalItems: PropTypes.arrayOf(PropTypes.node),
  description: PropTypes.node,
  heading: PropTypes.node,
  leftContent: PropTypes.node,
  selectInput: PropTypes.node
}
export default ListViewItemWrapper
