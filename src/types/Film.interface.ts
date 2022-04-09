export interface Film {
   title: string
   thumbnail: {
      trending: Thumbnail
      regular: {
         small: string
         medium: string
         large: string
      }
   }
   year: string
   category: string
   rating: string
   isBookmarked: boolean
   isTrending: boolean
}

interface Thumbnail {
   small: string
   medium: string
}

interface Regular {}
