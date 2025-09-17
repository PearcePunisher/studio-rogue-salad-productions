import {postType} from './postType'
import {workType} from './workType'
import {pageRelatedTypes} from './pageType'

export const schemaTypes = [postType, workType, ...pageRelatedTypes]
