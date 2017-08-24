import React from 'react'
import PropTypes from 'prop-types'

import { ListGroupItem } from './index'
import ListViewItemWrapper from './ListViewItemWrapper'

const ListViewItem = ({ stacked, ...other }) =>
  <ListGroupItem stacked={stacked}>
    <ListViewItemWrapper {...other} />
  </ListGroupItem>

ListViewItem.propTypes = {
  stacked: PropTypes.bool.isRequired
}
ListViewItem.defaultProps = {
  stacked: false
}
export default ListViewItem
