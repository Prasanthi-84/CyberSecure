export const CLASSIFICATION_TYPES = {
  LIKELY_FAKE: 'likely-fake',
  QUESTIONABLE: 'questionable',
  LIKELY_REAL: 'likely-real'
};

export const CLASSIFICATION_MESSAGES = {
  [CLASSIFICATION_TYPES.LIKELY_FAKE]: "This content shows several indicators commonly associated with misinformation. Consider verifying through multiple reliable sources.",
  [CLASSIFICATION_TYPES.QUESTIONABLE]: "This content has some concerning elements. We recommend cross-checking with established news sources before sharing.",
  [CLASSIFICATION_TYPES.LIKELY_REAL]: "This content appears to be from a credible source with factual information. However, always verify important news through multiple sources."
};

export const CLASSIFICATION_TITLES = {
  [CLASSIFICATION_TYPES.LIKELY_FAKE]: 'Likely Fake News',
  [CLASSIFICATION_TYPES.QUESTIONABLE]: 'Questionable Content',
  [CLASSIFICATION_TYPES.LIKELY_REAL]: 'Likely Legitimate'
};

export const CLASSIFICATION_COLORS = {
  [CLASSIFICATION_TYPES.LIKELY_FAKE]: 'red',
  [CLASSIFICATION_TYPES.QUESTIONABLE]: 'amber',
  [CLASSIFICATION_TYPES.LIKELY_REAL]: 'green'
};