export type ComicDate = {
  type: string;
  date: string;
}

export type ComicProps = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  },
  dates: ComicDate[]
}