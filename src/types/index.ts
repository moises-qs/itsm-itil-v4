export interface NavigationItem {
  path: string;
  label: string;
}

export interface AttributeWheelItem {
  title: string;
  description: string;
  color: string;
}

export interface TimelineEvent {
  year: string;
  version: string;
  title: string;
  description: string;
}

export interface BibliographyItem {
  title: string;
  url: string;
  type: 'PDF' | 'Web' | 'Video' | 'Blog';
}
