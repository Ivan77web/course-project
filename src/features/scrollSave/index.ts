import { ScrollSaveSchema } from './model/types/scrollSaveSchema';
import { scrollSaveReducer, scrollSaveActions } from './model/slice/scrollSaveSlice';
import { getScrollByPath } from './model/selectors/scrollSaveSelectors';

export {
    scrollSaveReducer,
    scrollSaveActions,
    getScrollByPath,
};

export type { ScrollSaveSchema };
