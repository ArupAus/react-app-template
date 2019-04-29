/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect'

const countSelector = state => state.count
const textSelector = state => state.text

export const derivedCountAndTextSelector = createSelector(
  [countSelector, textSelector],
  (count, text) => {
    return `Store values are: count = ${count}, text = ${text}`
  }
)
