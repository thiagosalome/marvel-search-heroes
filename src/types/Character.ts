export type CollectionItem = {
  resourceURI: string;
  name: string;
}

export type Collections = {
  available: number;
  collectionURI: string;
  items: CollectionItem[]
}

export type CharacterProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  resourceURI: string;
  comics: Collections;
  series: Collections;
  stories: Collections;
  events: Collections;
  rating: number;
}
