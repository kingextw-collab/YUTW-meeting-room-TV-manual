
export interface Option {
  label: string;
  nextId: string;
}

export interface DecisionNode {
  id: string;
  title: string;
  question?: string;
  options?: Option[];
  content?: string;
  isFinal?: boolean;
}

export type DecisionTree = Record<string, DecisionNode>;
